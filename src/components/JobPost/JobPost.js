import React from 'react'
import { Link } from 'react-router-dom'
import "./jobpost.scss"
import gqlLogo from "../../assets/images/graphql.png"

function JobPost({job}) {
    return (
        <article className="job-post">
            <h1>{job.company.slug}</h1>
            <div className="job-post-logo"><img src={job.company.logoUrl || gqlLogo} alt={job.company.name} width="75" height="75" /></div>
            <div className="job-post-content">
                <h1 className="job-post-title"><Link to={job.company.slug + "/" + job.slug}>{job.title}</Link></h1>
                <div className="job-post-info">
                    <span><i className="fas fa-calendar"></i>{new Date(job.createdAt).toLocaleDateString()}</span>
                    <span><i className="fas fa-building"></i>{job.company.name}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {job.cities[0]?.name && "Remote"}</span>
                </div>
            </div>
        </article>
    )
}

export default JobPost
