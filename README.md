# 1° comando: npx creat-react-app nomedoprojeto template typescript
# 2° public fica o html que carrega tuo
# 3° src fica os códigos do seridor
# 4° cada componente é um arquivo.tsx
# 5° todo file que é component deve começar com letra maiúscula
# 6° a função em javascript é um component
# 7° todo component retorna HTML
# 8° quando tiver mais de um ELEMENTO HTML dentro do return esse deve conter uma fragmentação <></>

home.tsx

const Home = () =>{
    return (
        <>
        <h1>oi</h1>
        <h2>oi</h2>
        </>
    );
}


# 9° no package.json ficam todas as ddependências
# 10° chamada de component é estilo tag: <Home/>
# 11° o inddex.html é mapeado pelo index.tsx que carrega App.tsx