import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -dnkBijyyLm77RHo-5wxhMxZn9bBIQR6LXsHJs51ipo54wfAMV6doflMFvkJi96g56sR4yHi4YR2oroQpU5VyZFlH_BI7OO7tyIclB2KBLuxcrXDAagKYaNqcDAkX3Yx',
    }
})

