import { handleUpdate } from "@/app/lib/actions/course-actions"
import { getCourseById } from "@/app/lib/api"
import { ImagePicker } from "@/app/lib/components/imagePicker"
import Image from "next/image"

interface IProps {
    params: { id: number }
}

export default function EditPage({ params }: IProps) {

    const course = getCourseById(params.id)
    return <>
        <p className="is-size-3">Edit course No. {params.id}</p>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleUpdate.bind(null, params.id)}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                            defaultValue={course.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="price"
                            placeholder="enter a price"
                            defaultValue={course.price}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="duration"
                            placeholder="enter a duration"
                            defaultValue={course.duration}
                        />
                    </div>

                    <div className="field my-4">
                        <Image 
                        src={"/" +course.cover}
                        width={200}
                        height={200}
                        alt="Cover"
                        />
                    </div>

                    <div className="field my-4">
                        <ImagePicker />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}