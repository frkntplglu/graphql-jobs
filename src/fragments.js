import { gql } from '@apollo/client'

export const BASE_JOB_FIELDS = gql`
fragment BaseParts on Job {
    id
    title
    slug
    company{
        id
        slug
        name
        logoUrl
    }
    cities{
        id
        name
        type
    }
    createdAt
  }
`;