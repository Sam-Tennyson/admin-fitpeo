import {
    Typography,
    CardBody,

} from "@material-tailwind/react";


const CustomTable = ({ columns, rows }) => {
    return (
        <>
            <CardBody className="overflow-scroll p-0">
                <table className=" w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column?.id}
                                    className="border-b-[1px] p-4"
                                    align={column?.align}
                                    style={{ minWidth: column?.minWidth }}
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {column?.label}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(
                            (row, index) => {
                                const isLast = index === rows.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={row?.id}>
                                        {columns?.map((column) => {
                                            const value = row[column?.id]
                                            return (
                                                <td
                                                    key={column?.id}
                                                    className={classes}
                                                    align={column?.align}
                                                    style={{ minWidth: column?.minWidth }}
                                                >
                                                    {column?.format ? column?.format(value, row) : value}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
        </>
    )
}

export default CustomTable