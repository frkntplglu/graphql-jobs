import React from 'react'
import "./joblist.scss"
import JobPost from "../JobPost/JobPost"
import { useQuery, gql } from '@apollo/client'
import {BASE_JOB_FIELDS} from "../../fragments"



const JOB_LIST = gql`
    ${BASE_JOB_FIELDS}
    query GetJobList{
        jobs{
            ...BaseParts
            
        }
    }`;

function JobList() {
    const {error, loading, data} = useQuery(JOB_LIST);

    return (
        <section className="container">
            {loading ? "Loading...." : 
                data.jobs.map(job => <JobPost key={job.id} job={job} />)
            }
        </section>
    )
}

export default JobList
