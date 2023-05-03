import React from "react";

import { Container } from "@/styles/pages/admin/subscriptions";
import axios from "../../axios";
import { useEffect, useState } from "react";
import { IoEnterSharp } from "react-icons/all";
import { AiOutlineArrowRight } from "react-icons/all";
import ActionsTd from "@/components/actionsTd";
import TableComponent from "@/components/table";
import SubscriptionModal from "@/components/subscriptionModal";
import { useRouter } from "next/router";
import { BiRefresh } from "react-icons/bi";
import { AdminLayout } from "@/components/adminLayout";
import ConfirmModal from "@/components/confirmModal";
import { toast } from "react-toastify";

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
    const [loading, setLoading] = useState(false);

    const [hackerPresenceCheck, setHackerPresenceCheck] =
        useState<HackerPresenceCheck | null>(null);
    const [showHackerPresenceCheckModal, setShowHackerPresenceCheckModal] =
        useState(false);

    const router = useRouter();

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    const getSubscriptions = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            const { data } = await axios.get("/Sub/allPreSubs", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setSubscriptions(
                // sorts from not approved to approved
                data.sort((a: Subscription, b: Subscription) => {
                    if (a.approved == true && b.approved == false) {
                        return 1;
                    } else if (a.approved == false && b.approved == true) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            );
        } catch (err) {
            router.replace("/admin/auth");
        }
    };

    useEffect(() => {
        getSubscriptions();
    }, []);

    const sendHackerPresenceCheckHandler = async () => {
        setLoading(true);
        try {
            if (hackerPresenceCheck) {
                const token = localStorage.getItem("adminToken");
                const { data } = await axios.post(
                    "/sub/checkPresence/" + hackerPresenceCheck.id,
                    {
                        type: hackerPresenceCheck.type,
                    }
                );
            } else {
                throw new Error("Erro interno - sem id");
            }
        } catch (err) {
            toast.error("Erro ao marcar check de usuário");
        }

        closeHackerPresenceCheckModal();
        setHackerPresenceCheck(null);
        setLoading(false);
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
                        Header: "Aprovado",
                        accessor: "approved",
                        Cell: (props: any) => {
                            return props.row.values.approved ? (
                                <span
                                    style={{
                                        color: "green",
                                        fontSize: 16,
                                        fontWeight: 500,
                                    }}
                                >
                                    Sim
                                </span>
                            ) : (
                                <span
                                    style={{
                                        color: "red",
                                        fontSize: 16,
                                        fontWeight: 500,
                                    }}
                                >
                                    Não
                                </span>
                            );
                        },
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
                                    icon: IoEnterSharp,
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
                    <h1>Inscrições</h1>
                    <p className="text-2xl">{subscriptions.length}</p>
                </div>
                <BiRefresh onClick={getSubscriptions} />
                <TableComponent columns={columns} data={data} />
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
                loading={loading}
            />
        </AdminLayout>
    );
};

export default Subscriptions;
