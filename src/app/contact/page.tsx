import CopyButton from "@/app/ui/copyButton";

export default function Contact() {
    return (
        <main className="flex flex-col items-center p-20 pb-0 ">
            <h1 className="text-7xl font-bold p-5">Contact</h1>
            <div className="flex flex-col p-5">
                {/* email */}
                <div className="flex flex-row p-5 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline-block"
                    >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" />
                    </svg>
                    <span className="text-2xl font-bold p-5 w-32 text-left">Email</span>
                    <span className="text-2xl font-bold p-5 ">:</span>
                    <a
                        href="mailto:alexandre_pirmez@appez.cafe"
                        className="text-2xl font-bold p-5 text-blue-500 hover:underline"
                    >
                        alexandre_pirmez@appez.cafe
                    </a>
                    <CopyButton text="alexandre_pirmez@appez.cafe" />
                </div>
                {/* github */}
                <div className="flex flex-row p-5 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline-block "
                    >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span className="text-2xl font-bold p-5 w-32 text-left">Github</span>
                    <span className="text-2xl font-bold p-5 ">:</span>
                    <a
                        href="https://github.com/Rs-appez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-bold p-5 text-blue-500 hover:underline"
                    >
                        Rs-appez
                    </a>
                </div>
                {/* linkedin */}
                <div className="flex flex-row p-5 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline-block "
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-2xl font-bold p-5 w-32 text-left">
                        LinkedIn
                    </span>
                    <span className="text-2xl font-bold p-5 ">:</span>
                    <a
                        href="https://www.linkedin.com/in/alexandre-pirmez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-bold p-5 text-blue-500 hover:underline"
                    >
                        alexandre pirmez
                    </a>
                </div>
            </div>
        </main>
    );
}
