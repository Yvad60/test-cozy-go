import React from 'react';

// HeartIcon Component
type IconProps = {
    fill: string;
    height: string;
    width: string;
    stroke: string;
    stroke_width: number;
};

const HeartIcon: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z" fill={fill} stroke={stroke} stroke-width={stroke_width} />
    </svg>
);

// ArrowIcon Component
const ArrowIcon: React.FC<IconProps> = (
    {
        fill,
        height,
        width,
        stroke,
        stroke_width,
    }
) => (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={fill}>
        <path fill={fill} stroke={stroke} stroke-width={stroke_width}
            d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L17.4697 15.5303C17.6842 15.7448 18.0068 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L9 5.25C8.69665 5.25 8.42318 5.43273 8.30709 5.71299C8.19101 5.99324 8.25517 6.31583 8.46967 6.53033L12.4393 10.5L5.46967 17.4697Z" />
    </svg>
);

const RoomIcon: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (

    <svg fill={fill} width={width} height={height} viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M 4.3,7 C 5.1270625,7 5.8,6.32706 5.8,5.5 5.8,4.67294 5.1270625,4 4.3,4 3.4729375,4 2.8,4.67294 2.8,5.5 2.8,6.32706 3.4729375,7 4.3,7 Z m 6.6,-2.4 -4.2,0 C 6.53425,4.6 6.4,4.73425 6.4,4.9 l 0,2.7 -4.2,0 0,-3.9 C 2.2,3.53425 2.06575,3.4 1.9,3.4 l -0.6,0 C 1.13425,3.4 1,3.53425 1,3.7 l 0,6.6 c 0,0.16575 0.13425,0.3 0.3,0.3 l 0.6,0 c 0.16575,0 0.3,-0.13425 0.3,-0.3 l 0,-0.9 9.6,0 0,0.9 c 0,0.16575 0.13425,0.3 0.3,0.3 l 0.6,0 c 0.16575,0 0.3,-0.13425 0.3,-0.3 L 13,6.7 C 13,5.54013 12.059875,4.6 10.9,4.6 Z" /></svg>
)


const LocationIcon: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill={fill} />
    </svg>
)

const Expand: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 6.64648V1.125C0.5 0.738281 0.951172 0.544922 1.23047 0.824219L3.98047 3.57422C4.15234 3.74609 4.15234 4.02539 3.98047 4.19727L1.23047 6.94727C0.951172 7.22656 0.5 7.0332 0.5 6.64648Z" fill={fill} />
    </svg>
)

const Apple: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.51431 6.45508C8.51431 6.50586 8.43813 8.00391 10.0885 8.79102C9.78384 9.73047 8.71743 11.8125 7.47329 11.8125C6.76235 11.8125 6.3561 11.3555 5.5436 11.3555C4.70571 11.3555 4.24868 11.8125 3.61392 11.8125C2.39517 11.8633 1.2272 9.57812 0.897119 8.63867C0.643213 7.92773 0.54165 7.24219 0.54165 6.58203C0.54165 4.32227 2.0397 3.23047 3.46157 3.20508C4.14712 3.20508 5.0104 3.6875 5.39126 3.6875C5.74673 3.6875 6.73696 3.10352 7.65103 3.17969C8.59048 3.25586 9.30142 3.61133 9.78384 4.29688C8.94595 4.83008 8.51431 5.51562 8.51431 6.45508ZM7.09243 2.29102C6.58462 2.875 5.97524 3.20508 5.31509 3.1543C5.26431 2.46875 5.51821 1.83398 5.97524 1.32617C6.38149 0.869141 7.09243 0.488281 7.70181 0.4375C7.70181 0.716797 7.77798 1.47852 7.09243 2.29102Z" fill="white" />
    </svg>

)

const PlayStore: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99185 6.5918L2.38052 0.955078L9.51528 5.06836L7.99185 6.5918ZM0.933252 0.625L7.43325 7.125L0.933252 13.625C0.603174 13.4727 0.374658 13.1426 0.374658 12.7363V1.53906C0.374658 1.13281 0.603174 0.802734 0.933252 0.625ZM11.7243 6.36328C12.2067 6.71875 12.2067 7.55664 11.7497 7.91211L10.2262 8.77539L8.55044 7.125L10.2262 5.5L11.7243 6.36328ZM2.38052 13.2949L7.99185 7.68359L9.51528 9.20703L2.38052 13.2949Z" fill="white" />
    </svg>


)

const Tick: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8162 4.20701C14.0701 4.47369 14.0597 4.89568 13.793 5.14954L6.08929 12.4829C5.95773 12.6081 5.78078 12.6742 5.59933 12.666C5.41788 12.6577 5.24766 12.5758 5.12803 12.4391L2.16506 9.05451C1.92254 8.77747 1.95052 8.35629 2.22755 8.11377C2.50459 7.87125 2.92577 7.89923 3.16829 8.17626L5.67342 11.0379L12.8737 4.1838C13.1404 3.92994 13.5624 3.94033 13.8162 4.20701Z" fill="#3270FC" />
    </svg>


)

const Cross: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2421 12.2426C12.5024 11.9822 12.5024 11.5601 12.2421 11.2997L8.94269 8.00037L12.243 4.70009C12.5033 4.43974 12.5033 4.01763 12.243 3.75728C11.9826 3.49693 11.5605 3.49693 11.3002 3.75728L7.99988 7.05756L4.69959 3.75727C4.43925 3.49692 4.01714 3.49692 3.75679 3.75727C3.49644 4.01762 3.49644 4.43973 3.75679 4.70008L7.05707 8.00037L3.75769 11.2997C3.49734 11.5601 3.49734 11.9822 3.75769 12.2426C4.01804 12.5029 4.44015 12.5029 4.7005 12.2426L7.99988 8.94318L11.2993 12.2426C11.5596 12.5029 11.9817 12.5029 12.2421 12.2426Z" fill="#191D23" />
    </svg>



)

const Home: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M22 22L2 22" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
        <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
        <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
        <path d="M4 22V9.5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
        <path d="M20 9.5V13.5M20 22V17.5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
        <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke={stroke} stroke-width="1.5" />
    </svg>



)

const House: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg fill={fill} width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 2.063L8 0l8 5.5V7h-2v9H2V7H0V5.5l3-2.063V1h2v1.063zM9 14h3V6L8 3 4 6v8h3v-3h2v3zM5 8h2v2H5V8zm4 0h2v2H9V8z" fill-rule="evenodd" />
    </svg>



)

const Open: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 9L12 15L6 9" stroke={stroke} stroke-width="2" />
    </svg>



)


const Request: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg fill={fill} xmlns="http://www.w3.org/2000/svg"
        width={width} height={height} viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
        <path d="M77.4,78.1H40.5c-1.2,0-2.3-1-2.3-2.2c0,0,0-0.1,0-0.1v-4.6c0-1.2,1-2.3,2.2-2.3c0,0,0.1,0,0.1,0h36.9
	c1.2,0,2.3,1,2.3,2.2c0,0,0,0.1,0,0.1v4.6C79.8,77,78.8,78.1,77.4,78.1C77.5,78.1,77.5,78.1,77.4,78.1z"/>
        <path d="M26.6,78.1H22c-1.2,0-2.3-1-2.3-2.2c0,0,0-0.1,0-0.1v-4.6c0-1.2,1-2.3,2.2-2.3c0,0,0.1,0,0.1,0h4.6
	c1.2,0,2.3,1,2.3,2.2c0,0,0,0.1,0,0.1v4.6C29,77,28,78,26.8,78.1C26.7,78.1,26.7,78.1,26.6,78.1z"/>
        <path d="M53.8,57.6c-1.2,0-2.3-1-2.3-2.2c0,0,0-0.1,0-0.1v-4.6c0-1.2,1-2.3,2.2-2.3c0,0,0.1,0,0.1,0h23.6
	c1.2,0,2.3,1,2.3,2.2c0,0,0,0.1,0,0.1v4.6c0,1.2-1,2.3-2.2,2.3c0,0-0.1,0-0.1,0H53.8z"/>
        <path d="M62.6,37.1c-1.2,0-2.3-1-2.3-2.2c0,0,0-0.1,0-0.1v-4.6c0-1.2,1-2.3,2.2-2.3c0,0,0.1,0,0.1,0h14.8
	c1.2,0,2.3,1,2.3,2.2c0,0,0,0.1,0,0.1v4.6c0,1.2-1,2.3-2.2,2.3c0,0-0.1,0-0.1,0H62.6z"/>
        <path d="M20.8,58.2C19.6,47.5,28,36.4,38,34.5l2.7-0.6c0.5-0.1,0.9-0.6,0.8-1.2c0-0.3-0.2-0.5-0.4-0.6l-6.7-4.5
	c-0.7-0.5-0.8-1.4-0.3-2c0,0,0,0,0-0.1l1.7-2.5c0.4-0.7,1.4-0.9,2-0.4c0,0,0,0,0.1,0L54,33.5c0.7,0.4,0.9,1.4,0.4,2c0,0,0,0,0,0.1
	l-11,16.2c-0.4,0.7-1.4,0.9-2,0.4c0,0,0,0-0.1,0l-2.5-1.7c-0.7-0.4-0.9-1.4-0.4-2c0,0,0,0,0-0.1l4.4-6.7c0.3-0.4,0.3-1.1-0.2-1.4
	c-0.2-0.2-0.5-0.3-0.8-0.2l-1.6,0.3c-7.8,1.5-14.4,10.3-13.7,17.9c0,0.7-1.1,1.7-1.9,1.9h-1.9C21.8,60.3,20.8,59.1,20.8,58.2z"/>
    </svg>



)


const Approved: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg fill={fill} height={height} width={width} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512" xmlSpace="preserve">
        <g>
            <g>
                <g>
                    <path d="M256,149.333c-82.481,0-149.333,66.853-149.333,149.333S173.519,448,256,448s149.333-66.853,149.333-149.333
				S338.481,149.333,256,149.333z M256,405.333c-58.917,0-106.667-47.75-106.667-106.667C149.333,239.75,197.083,192,256,192
				s106.667,47.75,106.667,106.667C362.667,357.583,314.917,405.333,256,405.333z"/>
                    <path d="M422.741,42.667h-60.07V32.491C362.671,14.543,348.128,0,330.18,0H181.828c-17.947,0-32.491,14.543-32.491,32.491v10.176
				H89.259c-25.734,0-46.592,20.858-46.592,46.592v376.149c0,25.734,20.858,46.592,46.592,46.592h333.483
				c25.734,0,46.592-20.858,46.592-46.592V89.259C469.333,63.525,448.475,42.667,422.741,42.667z M192.004,42.667H320v42.667
				H192.004V42.667z M426.667,465.408c0,2.17-1.755,3.925-3.925,3.925H89.259c-2.17,0-3.925-1.755-3.925-3.925V89.259
				c0-2.17,1.755-3.925,3.925-3.925h60.075v10.176c0,17.947,14.543,32.491,32.491,32.491h0.004h148.348h0.004
				c17.947,0,32.491-14.543,32.491-32.491V85.333h60.07c2.17,0,3.925,1.755,3.925,3.925V465.408z"/>
                    <path d="M308.207,236.919c-10.538-5.269-23.353-0.998-28.622,9.541l-29.43,58.86l-21.737-21.737
				c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17l42.667,42.667c0.033,0.033,0.069,0.06,0.102,0.092
				c0.342,0.338,0.707,0.655,1.074,0.971c0.187,0.162,0.369,0.333,0.56,0.487c0.284,0.227,0.587,0.436,0.884,0.65
				c0.3,0.217,0.597,0.44,0.905,0.639c0.204,0.131,0.421,0.248,0.631,0.373c0.419,0.25,0.838,0.498,1.269,0.717
				c0.041,0.021,0.077,0.046,0.118,0.067c0.153,0.076,0.31,0.131,0.464,0.203c0.447,0.21,0.895,0.415,1.353,0.593
				c0.26,0.102,0.523,0.184,0.786,0.275c0.386,0.132,0.77,0.265,1.161,0.375c0.34,0.096,0.682,0.172,1.024,0.25
				c0.318,0.072,0.634,0.148,0.955,0.206c0.394,0.072,0.788,0.122,1.184,0.171c0.28,0.034,0.558,0.072,0.839,0.095
				c0.411,0.034,0.82,0.048,1.229,0.059c0.278,0.007,0.556,0.016,0.834,0.012c0.391-0.006,0.779-0.029,1.168-0.056
				c0.307-0.021,0.612-0.042,0.918-0.076c0.348-0.039,0.693-0.093,1.039-0.15c0.346-0.056,0.691-0.114,1.034-0.187
				c0.3-0.064,0.596-0.141,0.893-0.218c0.378-0.097,0.755-0.199,1.128-0.317c0.265-0.084,0.524-0.18,0.785-0.275
				c0.387-0.14,0.771-0.283,1.151-0.445c0.258-0.11,0.509-0.233,0.762-0.354c0.361-0.172,0.72-0.345,1.072-0.538
				c0.285-0.155,0.56-0.326,0.838-0.495c0.301-0.183,0.602-0.364,0.896-0.563c0.335-0.227,0.657-0.474,0.979-0.72
				c0.222-0.17,0.446-0.333,0.663-0.512c0.376-0.312,0.735-0.647,1.091-0.986c0.124-0.118,0.258-0.221,0.38-0.343
				c0.033-0.033,0.06-0.069,0.092-0.102c0.338-0.342,0.656-0.708,0.972-1.075c0.161-0.187,0.332-0.368,0.486-0.559
				c0.228-0.285,0.437-0.588,0.652-0.887c0.216-0.299,0.439-0.595,0.638-0.902c0.132-0.205,0.249-0.423,0.375-0.634
				c0.25-0.418,0.496-0.836,0.715-1.266c0.021-0.041,0.047-0.078,0.067-0.119l42.667-85.333
				C323.017,255.002,318.745,242.188,308.207,236.919z"/>
                </g>
            </g>
        </g>
    </svg>



)


const Declined: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg fill={fill} height={height} width={width} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 329.328 329.328" xmlSpace="preserve">
        <path d="M164.666,0C73.871,0,0.004,73.871,0.004,164.672c0.009,90.792,73.876,164.656,164.662,164.656
	c90.793,0,164.658-73.865,164.658-164.658C329.324,73.871,255.459,0,164.666,0z M164.666,30c31.734,0,60.933,11.042,83.975,29.477
	L59.478,248.638c-18.431-23.04-29.471-52.237-29.474-83.967C30.004,90.413,90.413,30,164.666,30z M164.666,299.328
	c-31.733,0-60.934-11.042-83.977-29.477L269.854,80.691c18.431,23.043,29.471,52.244,29.471,83.979
	C299.324,238.921,238.917,299.328,164.666,299.328z"/>
    </svg>




)



const Message: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13 15.23C13 16.42 12.56 17.5201 11.82 18.3901C10.83 19.5901 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.3301C2.86 18.4001 2 16.91 2 15.23C2 13.47 2.94 11.9201 4.38 11.0001C5.27 10.4201 6.34 10.0901 7.5 10.0901C10.54 10.0901 13 12.39 13 15.23Z" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>




)

const Eye: React.FC<IconProps> = ({
    fill,
    height,
    width,
    stroke,
    stroke_width,
}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill={fill}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z" fill={fill}/>
</svg>





)


// Exporting Components
export { HeartIcon, ArrowIcon, RoomIcon, LocationIcon, Expand, Apple, PlayStore, Tick, Cross, Home, House, Open, Request, Approved, Declined, Message, Eye };
