import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({title,canonical}) {
  return (
     <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICITMLDA, International Conference on Internet of Things, Machine Learning, and Data Analytics  ,Smart Devices, AI Conference, ML Conference, IoT Conference, Data Science Conference, International Conference 2025, Technology Conference, Big Data, Deep Learning, Artificial Intelligence, Smart Systems, Predictive Analytics, Conference on IoT and ML, Conference on Data Analytics, Emerging Technologies, Computer Science Conference, Tech Conference 2025" />
            <meta name="description" content="Join the International Conference on Internet of Things, Machine Learning, and Data Analytics to explore the latest advancements in IoT, AI, and data-driven technologies. Connect with global researchers, industry experts, and innovators at this premier 2025 technology event." />
            <meta name="author" content="ICITMLDA Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Internet of Things, Machine Learning, and Data Analytics" />
            <meta property="og:description" content="Join the International Conference on Internet of Things, Machine Learning, and Data Analytics to explore the latest advancements in IoT, AI, and data-driven technologies. Connect with global researchers, industry experts, and innovators at this premier 2025 technology event." />
            <meta property="og:url" content="https://icitmlda.com/" />
            <meta property="og:image" content="https://icitmlda.com/images/ICITMLDA.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icitmlda.com/images/ICITMLDA Fav.png" />

        </Helmet>
  )
}

export default HelmetComponent