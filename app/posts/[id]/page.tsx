interface PostPageProps {
    params: {
        id: string;
    };
}


export default function PostPage({ params }: PostPageProps) {
    const { id } = params;
    return <h1>Post Page {id}</h1>;
}