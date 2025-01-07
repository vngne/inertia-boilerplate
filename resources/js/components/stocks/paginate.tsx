import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
    links: { url: string | null; label: string; active: boolean }[];
}

export default function Paginate({ links }: PaginationProps) {
    if (!links || links.length === 0) return null;

    return (
        <div className="mt-4">
            <Pagination>
                <PaginationContent>
                    {links.map((link, index) => {
                        const isEllipsis = link.url === null;
                        const isPrevious = link.label.includes("&laquo;");
                        const isNext = link.label.includes("&raquo;");

                        // Ellipsis
                        if (isEllipsis) {
                            return (
                                <PaginationItem key={index}>
                                    {/* <PaginationEllipsis /> */}
                                </PaginationItem>
                            );
                        }

                        // Previous Button
                        if (isPrevious) {
                            return (
                                <PaginationItem key={index}>
                                    <PaginationPrevious href={link.url || "#"} />
                                </PaginationItem>
                            );
                        }

                        // Next Button
                        if (isNext) {
                            return (
                                <PaginationItem key={index}>
                                    <PaginationNext href={link.url || "#"} />
                                </PaginationItem>
                            );
                        }

                        // Normal Pagination Link
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href={link.url || "#"}
                                    isActive={link.active}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            </PaginationItem>
                        );
                    })}
                </PaginationContent>
            </Pagination>
        </div>
    );
}
