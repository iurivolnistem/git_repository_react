interface RepositoryPropsType{
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryPropsType){
    return(
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar o repositório</a>
        </li>
    );
}