export function BackgroundGrid() {
    return (
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}
            <img
                    id="background"
                    className="absolute top-0 max-w-[877px] -left-20 z-0"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
        </div>
    );
}
