import Image from "next/image"
import { ICourse } from "../api"
import Link from "next/link"

interface IProps {
    courses: ICourse[]
}

export const CourseList = ({ courses }: IProps) => {
    return <>
        <div className="container">
            <div className="columns is-multiline" >
                {
                    courses.map((course) => (
                        <div key={course.id} className="column is-one-third">
                            <div className="box">
                                <Link href={`/courses/details/${course.id}`}>
                                    <figure className="image is-4by3">
                                        <Image
                                            src={"/" + course.cover}
                                            width={1920}
                                            height={1080}
                                            alt="Cover"
                                        />
                                    </figure>
                                    <h3 className="title is-4">{course.name}</h3>
                                    <p>for {course.duration} months</p>
                                    <p>{course.price} AMD per month</p>
                                </Link>
                                <Link href={"/courses/edit/" + course.id} className="button is-primary my-3">edit</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}