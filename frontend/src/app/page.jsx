import FormTask from "@/app/components/FormTask";
import ListTask from "@/app/components/ListTask";
function HomePage (){
  return(
      <div className="container mx-auto">
        <h1>Tasks App</h1>
          <div className="flex gap-x-10">
              <FormTask />
              <ListTask />
          </div>
      </div>
  )
}
export default HomePage