import { ICourse, getCourseById } from "@/app/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";

interface IProps {
    params: { id: number };
}

export default async function CoursePage(props: IProps) {
    const course: ICourse = await getCourseById(props.params.id);

    if (!course) {
        notFound();
    }

    return (
        <main className="container">
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <figure className="image is-4by3">
                            <Image
                                src={"/" + course.cover}
                                width={1920}
                                height={1080}
                                alt="Cover"
                            />
                        </figure>
                        <h1 className="title is-3">{course.name}</h1>
                        <p>for {course.duration} months</p>
                        <p className="subtitle is-5">{course.price} AMD per month</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
