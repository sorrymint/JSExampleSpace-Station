import Image from 'next/image'

export function useMDXComponents(components) {
    return {
        img: (props) => (
            <Image
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="rounded-lg shadow-lg border-2 border-gray-800"
            />
        ),
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold tracking-wide mb-8 text-blue-900 border-b-2 border-blue-900">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold tracking-wide mb-6 text-gray-800">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-medium tracking-wide mb-4 text-gray-700">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-gray-600">
                {children}
            </p>
        ),
        ...components,
    }
}