import matter from 'gray-matter';

const files = import.meta.glob('/content/works/*.md',{as: 'raw',eager:true})

function UseWorks(){
    const works = Object.entries(files).map(([path,rawContent])=>{
        const {data , content}  = matter(rawContent);
        return {
            ...data,
            content,
            slug:
            path.split('/').pop().replace('md',''),
        }
    })
    return works
}

export default UseWorks