
type Params = Promise<{slug:string}>

export default async function page({params}:{params:Params}) {
    const {slug} = await params;
  return (
    <div>
      <p>hello from Slug page {slug}</p>
    </div>
  )
}
