export function SchoolCard({
    companyIcon,
    children,
}: {
    companyIcon: string;
    children: React.ReactNode;
}) {
    return (
        <div className='flex flex-1 flex-row gap-8 p-4 w-full'>
            {/* Company Icon */}
            <div className='min-w-[120px]'>
                <img
                    src={companyIcon}
                    alt='Company Icon'
                    width={120}
                    height={120}
                    className='rounded-full'
                />
            </div>

            {/* Text */}
            <div className='flex-1'>{children}</div>
        </div>
    );
}
