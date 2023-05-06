import React from "react";

import { Container } from "@/styles/pages/admin/subscriptions";
import axios from "../../axios";
import { useEffect, useState } from "react";
import {  RxEnter} from "react-icons/rx";
import { AiOutlineArrowRight } from "react-icons/ai";
import ActionsTd from "@/components/actionsTd";
import TableComponent from "@/components/table";
import SubscriptionModal from "@/components/subscriptionModal";
import { useRouter } from "next/router";
import { BiRefresh } from "react-icons/bi";
import { AdminLayout } from "@/components/adminLayout";
import ConfirmModal from "@/components/confirmModal";
import { toast } from "react-toastify";
import Loader from "../../components/loader";

export interface Subscription {
    id: string;
    email: string;
    acceptTerms: boolean;
    contact: string;
    discord: string;
    github?: string;
    linkedin?: string;
    document: string;
    documentType: string;
    fullName: string;
    level: string;
    institution: string;
    gender: string;
    local: string;
    group: boolean;
    why: string;
    specialNeeds?: string;
    history?: string;
    habilities?: string;
    mailing: boolean;
    approved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

enum checkType {
    in = "in",
    out = "out",
}

interface HackerPresenceCheck {
    id: string;
    type: checkType;
}

const Subscriptions = () => {
    const [modalLoading, setModalLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    const [hackerPresenceCheck, setHackerPresenceCheck] =
        useState<HackerPresenceCheck | null>(null);
    const [showHackerPresenceCheckModal, setShowHackerPresenceCheckModal] =
        useState(false);

    const router = useRouter();
    const [inCampusQuantity, setInCampusQuantity] = useState(0)
    const [outCampusQuantity, setOutCampusQuantity] = useState(0)

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    const getSubscriptions = async () => {
        setLoading(true)
        try {
            const token = localStorage.getItem("adminToken");
            const { data } = await axios.get("/Sub/getAllApproved", {
                headers: { Authorization: `Bearer ${token}` },
            });
            let countInCampus = 0
            let countOutCampus = 0
            for(let sub of data) {
                if (sub.inCampus) {
                    countInCampus += 1
                } else {
                    countOutCampus += 1
                }
            }
            setInCampusQuantity(countInCampus)
            setOutCampusQuantity(countOutCampus)
            setSubscriptions(data);
        } catch (err) {
            router.replace("/admin/auth");
        }
        setLoading(false)
    };

    useEffect(() => {
        getSubscriptions();
    }, []);

    const sendHackerPresenceCheckHandler = async () => {
        setModalLoading(true);
        try {
            if (hackerPresenceCheck) {
                const token = localStorage.getItem("adminToken");
                const { data } = await axios.post(
                    "/entries/checkPresence/" + hackerPresenceCheck.id,
                    {
                        type: hackerPresenceCheck.type,
                    },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                toast.success('Entrada/Saída registrada com sucesso!')
            } else {
                toast.error("Erro interno - sem id")
            }
        } catch (err) {
            toast.error("Erro ao marcar check de usuário");
        }

        closeHackerPresenceCheckModal();
        setHackerPresenceCheck(null);
        setModalLoading(false);
    };

    const closeHackerPresenceCheckModal = () => {
        setShowHackerPresenceCheckModal(false);
        setHackerPresenceCheck(null);
    };

    const columns = React.useMemo(
        () => [
            {
                Header: " ",
                columns: [
                    {
                        Header: "Nome completo",
                        accessor: "fullName",
                    },
                    {
                        Header: "Documento",
                        accessor: "document",
                    },
                    {
                        Header: "Instituição",
                        accessor: "institution",
                    },
                    {
                        Header: "Contato",
                        accessor: "contact",
                    },
                    {
                        Header: "Dentro do campus?",
                        accessor: "inCampus",
                        Cell: (props: any) => (
                            <span>{props.value ? 'Sim' : 'Não'}</span>
                        )
                    },
                    {
                        Header: "Ações",
                        accessor: "id",
                        Cell: (props: any) => {
                            const actions = [
                                {
                                    handler: () => {
                                        const subs = subscriptions.find(
                                            (subscription) =>
                                                subscription.id ==
                                                props.row.values.id
                                        );
                                        if (subs) {
                                            console.log(subs);
                                            setHackerPresenceCheck({
                                                id: subs.id,
                                                type: checkType.in,
                                            });
                                            setShowHackerPresenceCheckModal(
                                                true
                                            );
                                        }
                                    },
                                    icon: RxEnter,
                                    color: "#02DE82",
                                },
                                {
                                    handler: () => {
                                        const subs = subscriptions.find(
                                            (subscription) =>
                                                subscription.id ==
                                                props.row.values.id
                                        );
                                        if (subs) {
                                            setHackerPresenceCheck({
                                                id: subs.id,
                                                type: checkType.out,
                                            });
                                            setShowHackerPresenceCheckModal(
                                                true
                                            );
                                        }
                                    },
                                    icon: AiOutlineArrowRight,
                                    color: "red",
                                },
                            ];

                            return <ActionsTd actions={actions} />;
                        },
                    },
                ],
            },
        ],
        [subscriptions]
    );

    const data = React.useMemo(() => [...subscriptions], [subscriptions]);

    return (
        <AdminLayout>
            <Container>
                <div className="flex flex-row w-full items-center justify-between">
                    <h1>Marcar presença</h1>
                    <p className="text-2xl">Inscritos: {subscriptions.length} | Em campus: {inCampusQuantity} | Fora Campus: {outCampusQuantity}</p>
                </div>
                <BiRefresh onClick={getSubscriptions} />
                {loading ? (
                    <Loader />
                ) : (
                    <TableComponent columns={columns} data={data} />
                )}
            </Container>
            <ConfirmModal
                title={`Tem certeza que deseja registrar a ${
                    hackerPresenceCheck?.type == checkType.in
                        ? "entrada"
                        : "saída"
                }?`}
                show={showHackerPresenceCheckModal}
                closeModal={closeHackerPresenceCheckModal}
                confirmHandler={sendHackerPresenceCheckHandler}
                loading={modalLoading}
            />
        </AdminLayout>
    );
};

export default Subscriptions;
