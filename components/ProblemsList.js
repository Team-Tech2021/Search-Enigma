import Link from 'next/link'

function ProblemsList({ problems }) {
    return (
        <div>
            <main className="container grid mx-auto ">
                <h2 className="m-10 text-3xl font-bold text-gray-900 justify-self-center mb-80">Welcome</h2>
                <h2 className="mb-2 text-xl font-bold text-gray-900 justify-self-center"> Problems list</h2>

                {/* <image src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg" alt="logo" /> */}
                <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
                    <ul>
                        {problems.map(problem => (
                            <div>

                                <ProblemItem key={problem.id} problem={problem} />
                                <li>
                                    <a href={problem.id} className="w-full lg:max-w-full ">
                                        <div className="flex flex-col justify-between p-4 leading-normal bg-white border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
                                        <p>
                                            {problem.description}

                                        </p>
                                        </div>
                                    </a>

                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    )
}

function ProblemItem({ problem }) {
    return (
        <li>
            <Link href="/problem/[id].js" as={`/problem/${problem.id}`}>
                <a>
                    {problem.title}
                </a>
            </Link>
        </li>
    )
}

export default ProblemsList;
