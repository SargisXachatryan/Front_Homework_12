import { getAllCourses } from "@/app/lib/api";
import { CourseList } from "@/app/lib/components/course-list";


export default function Page(){
    const list=getAllCourses()
    console.log(list);
    
    return<>
        <h1 className="is-size-2">Courses</h1>
        <CourseList courses={list}/>
    </>
} 