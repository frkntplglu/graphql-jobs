import React from 'react'
import "./jobdetail.scss"
import { gql, useQuery } from "@apollo/client"
import {BASE_JOB_FIELDS} from "../../fragments"
import { useParams } from 'react-router'
import gqlLogo from "../../assets/images/graphql.png"


function JobDetail() {
    let { slug, company } = useParams();
    const GET_JOB_BY_SLUG = gql`
    ${BASE_JOB_FIELDS}
    query GetJobBySlug($slug: String! $company: String!){
        job(input : {jobSlug: $slug companySlug:$company})
        {
            ...BaseParts
            description
            applyUrl
        }
    }`
    const {error, loading, data} = useQuery(GET_JOB_BY_SLUG, {
        variables: { slug:slug, company: company },
    });

    if(loading) return <div className="container">Loading...</div>
    return (
        <section className="container">
            <div className="job-detail-header">
                <div className="job-detail-logo"><img src={data.job.company.logoUrl || gqlLogo} alt={data.job.company.name} width="120" height="120" /></div>
                <div className="job-detail-header-content">
                    <h1 className="job-detail-title">{data.job.title}</h1>
                    <div className="job-post-info">
                        <span><i className="fas fa-calendar"></i>{new Date(data.job.createdAt).toLocaleDateString()}</span>
                        <span><i className="fas fa-building"></i>{data.job.company.name}</span>
                        <span><i className="fas fa-map-marker-alt"></i> {data.job.cities[0]?.name && "Remote"}</span>
                    </div>
                </div>
                <div className="job-detail-apply">
                    <a href={data.job.applyUrl} target="_blank" rel="noreferrer">Apply This Job</a>
                </div>
            </div>
            <div className="job-detail-content">
                {data.job.description}
            </div>
        </section>
    )
}

export default JobDetail
