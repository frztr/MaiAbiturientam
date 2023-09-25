import React from 'react'

const GraduatorHat = ({className, ...otherprops}) => {
    return (
        <svg className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg" width="111" height="110" viewBox="0 0 111 110" {...otherprops}>
            <path d="M81.964 14.0017C73.1923 9.34377 64.4245 4.67655 55.6606 0L0.632812 29.2809L10.0484 34.4124L9.26918 34.5538V89.3718H13.9074V38.968L17.2469 38.3187L18.5456 39.0256V66.7147C18.5456 71.5006 42.6922 85.2143 47.5298 87.9162C50.0449 89.3098 52.8129 90.0231 55.6146 89.9994C58.4162 89.9758 61.1745 89.2159 63.6708 87.78C92.7571 70.9717 92.7571 67.8771 92.7571 66.7147V39.0256L110.633 29.3019C110.633 29.3019 93.0076 19.8715 81.964 14.0017ZM88.1189 65.8298C79.603 72.2289 70.7319 78.0041 61.5605 83.1198C59.7088 84.1866 57.6623 84.7515 55.5835 84.7697C53.5046 84.7879 51.4507 84.2588 49.5846 83.2245C40.38 78.2806 31.5501 72.4927 23.1838 65.9188V41.5442L55.6514 59.206L88.1189 41.5442V65.8298ZM55.6514 53.4042L25.1133 36.7897L55.118 30.9513L54.3295 25.7832L17.9195 32.873L11.412 29.3333L55.6467 5.7965C59.4733 7.85433 95.1783 26.8147 99.9046 29.3281L55.6514 53.4042Z" />
        </svg>
    )
}

export default GraduatorHat