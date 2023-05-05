import React from "react";

import { Container } from "@/styles/pages/admin/subscriptions";
import axios from "../../axios";
import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import ActionsTd from "@/components/actionsTd";
import TableComponent from "@/components/table";
import SubscriptionModal from "@/components/subscriptionModal";
import { useRouter } from "next/router";
import { BiRefresh } from "react-icons/bi";
import { AdminLayout } from "@/components/adminLayout";
import ConfirmModal from "@/components/confirmModal";
import { toast } from "react-toastify";
import Moment from "react-moment";
import Loader from "../../components/loader";

enum checkType {
    in = "in",
    out = "out",
}

export interface Subscription {
    document: string;
    fullName: string;
}

export interface PresenceCheck {
    id: number;
    date: Date;
    type: checkType;
    hacker: Subscription;
}

const Presences = () => {
    const [presences, setPresences] = useState<PresenceCheck[]>([]);
    const [loading, setLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [modalLoading, setModalLoading] = useState(false)

    const router = useRouter();

    const getPresences = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("adminToken");
            const { data } = await axios.get("/entries/getAll", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPresences(data);
        } catch (err) {
            router.replace("/admin/auth");
        }

        setLoading(false);
    };

    useEffect(() => {
        getPresences();
    }, []);



    const columns = React.useMemo(
        () => [
            {
                Header: " ",
                columns: [
                    {
                        Header: "Nome completo",
                        accessor: "user.fullName",
                    },
                    {
                        Header: "Documento",
                        accessor: "user.document",
                    },
                    {
                        Header: "Data",
                        accessor: "time",
                        Cell: (props: any) => (
                            <span>
                                <Moment format="DD/MM/yyyy - HH:mm">
                                    {props.value}
                                </Moment>
                            </span>
                        ),
                    },
                    {
                        Header: "Tipo",
                        accessor: "type",
                        Cell: (props: any) => {
                            return props.row.values.type == "in" ? (
                                <span
                                    style={{
                                        color: "green",
                                        fontSize: 16,
                                        fontWeight: 500,
                                    }}
                                >
                                    Entrada
                                </span>
                            ) : (
                                <span
                                    style={{
                                        color: "red",
                                        fontSize: 16,
                                        fontWeight: 500,
                                    }}
                                >
                                    Saída
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
                                        setDeleteId(props.row.values.id);
                                        setShowDeleteModal(true);
                                    },
                                    icon: BsFillTrashFill,
                                    color: "red",
                                },
                            ];

                            return <ActionsTd actions={actions} />;
                        },
                    },
                ],
            },
        ],
        [presences]
    );

    const data = React.useMemo(() => [...presences], [presences]);

    const confirmDeleteHandler = async () => {
        setModalLoading(true)
        try {
            const token = localStorage.getItem('adminToken')
            const { data } = await axios.delete('/entries/delete/' + deleteId, { headers: { Authorization: `Bearer ${token}` } })
            await getPresences()
            toast.success('Entrada/saída deletada com sucesso!')
        } catch (err) {
            toast.error('Erro ao deletar entrada/saída!')
        }

        closeDeleteModal()
        setModalLoading(false)
    }

    const closeDeleteModal = () => {
        setDeleteId(null)
        setShowDeleteModal(false)
    }

    return (
        <AdminLayout>
            <Container>
                <div className="flex flex-row w-full items-center justify-between">
                    <h1>Presenças</h1>
                    <p className="text-2xl">{presences.length}</p>
                </div>
                <BiRefresh onClick={getPresences} />
                {loading ? (
                    <Loader />
                ) : (
                    <TableComponent columns={columns} data={data} />
                )}
                <ConfirmModal
                    title="Tem certeza que deseja deletar a entrada/saída?"
                    show={showDeleteModal}
                    closeModal={closeDeleteModal}
                    confirmHandler={confirmDeleteHandler}
                    loading={modalLoading}
                />
            </Container>
        </AdminLayout>
    );
};

export default Presences;
