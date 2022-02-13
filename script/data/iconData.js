const iconData = {
    'search': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path></svg>',
    'tick': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405.272 405.272"><path d="M393.401 124.425 179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z"/></svg>',
    'book': '<svg viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0"></path><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0"></path><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0"></path><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0"></path></svg>',
    'user': '<svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 000 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"/></svg>',
    'inbox': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 22 22"><path d="M 7.8671875 4 C 6.8792418 4 6.0274565 4.7395617 5.8867188 5.7167969 L 4.0097656 18.859375 A 1.0001 1.0001 0 0 0 4 19 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 24 26 C 25.093063 26 26 25.093063 26 24 L 26 19 A 1.0001 1.0001 0 0 0 25.990234 18.859375 L 24.111328 5.71875 L 24.111328 5.7167969 C 23.971587 4.7390631 23.120167 4 22.132812 4 L 7.8671875 4 z M 7.8671875 6 L 22.132812 6 L 23.990234 19 L 17.816406 19 C 17.403406 20.163 16.304 21 15 21 C 13.696 21 12.596594 20.163 12.183594 19 L 6.0097656 19 L 7.8671875 6.0019531 L 7.8671875 6 z"></path></svg>',
    'grade': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361 8.787V100h91.213zM149.565 250.713h53.077l-26.417-69.999z"></path><path d="M346 130c-8.284 0-15-6.716-15-15V0H66c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h380c8.284 0 15-6.716 15-15V130zm-80 40h15v-15c0-8.284 6.716-15 15-15s15 6.716 15 15v15h15c8.284 0 15 6.716 15 15s-6.716 15-15 15h-15v15c0 8.284-6.716 15-15 15s-15-6.716-15-15v-15h-15c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-21.542 149.034c-1.744.658-3.534.97-5.294.97-6.062 0-11.77-3.701-14.036-9.708l-11.164-29.583H138.14l-11.283 29.626c-2.949 7.742-11.615 11.627-19.356 8.679-7.742-2.948-11.627-11.615-8.679-19.356l60.08-157.747c.043-.114.088-.227.134-.339 2.873-7.024 9.633-11.568 17.222-11.575h.019c7.582 0 14.341 4.528 17.226 11.541.056.136.109.272.161.409l59.534 157.753c2.923 7.751-.99 16.405-8.74 19.33zM386 450H266c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60H266c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15z"></path></svg>',
    // 'plane': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.535 14.465c-19.569-19.568-51.395-19.241-70.557.726L322.092 124.488 66.131 39.781 12.4 93.513l213.352 131.365-107.956 112.494-69.231-11.366L0 374.571l101.78 35.649L137.429 512l48.565-48.565-11.366-69.231 112.494-107.955L418.487 499.6l53.732-53.732-84.706-255.961L496.808 85.022c19.968-19.162 20.295-50.988.727-70.557z"></path></svg>',
    'plane': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 8.947 22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447z"/></svg>',
    'work': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M26 5H4c-1.105 0-2 .895-2 2v9c0 1.105.895 2 2 2h22c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2zM15 16c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm11 4H4c-.732 0-1.409-.212-2-.556V23c0 1.105.895 2 2 2h22c1.105 0 2-.895 2-2v-3.556c-.591.344-1.268.556-2 .556z"/><path d="M18 6h-6V5c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v1z"/></svg>',
    'cook': '<svg viewBox="0 0 512.01 512.01" xmlns="http://www.w3.org/2000/svg"><path d="M421.188 155.005c-11.463-19.751-33.217-34-69.188-34h-49v-19c0-24.813-20.187-45-45-45h-4c-24.813 0-45 20.187-45 45v19h-49c-35.965 0-57.723 14.245-69.188 34zm-182.188-53c0-8.271 6.729-15 15-15h4c8.271 0 15 6.729 15 15v19h-34zM497.508 198.549c-9.111-8.734-21.012-13.544-33.508-13.544H48c-26.022 0-48 21.049-48 47 0 25.918 21.949 47 48 47h33v131c0 24.813 20.187 45 45 45h260c24.813 0 45-20.187 45-45v-131h33c12.496 0 24.396-4.81 33.508-13.544 19.333-18.534 19.339-48.372 0-66.912zM81 249.005H48c-9.589 0-18-7.944-18-17s8.411-17 18-17h33zm383 0h-33v-34h33c9.589 0 18 7.944 18 17s-8.411 17-18 17z"/></svg>',
    'more': '<svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>',
    'play': '<svg data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></svg>',
    'folder': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/></svg>',
    'exit': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 2h2c.55228475 0 1 .44771525 1 1 0 .51283584-.38604019.93550716-.88337887.99327227L7 4H5c-.51283584 0-.93550716.38604019-.99327227.88337887L4 5v14c0 .5128358.38604019.9355072.88337887.9932723L5 20h14c.5128358 0 .9355072-.3860402.9932723-.8833789L20 19v-2c0-.5522847.4477153-1 1-1 .5128358 0 .9355072.3860402.9932723.8833789L22 17v2c0 1.5976809-1.24892 2.9036609-2.8237272 2.9949073L19 22H5c-1.59768088 0-2.90366088-1.24892-2.99490731-2.8237272L2 19V5c0-1.59768088 1.24891996-2.90366088 2.82372721-2.99490731L5 2h2-2Zm16 0 .081.003.1197258.01724007.1114167.02949802.111079.04393527.0974873.05232209.0960413.06679051.0903567.08010726.0965586.11180017.0716634.11124451.0310174.06096295.0337679.08144877.0240408.07565741.0289379.14789747L22 3v6c0 .55228475-.4477153 1-1 1s-1-.44771525-1-1V5.414l-6.2928932 6.2931068c-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886c-.3604839-.360484-.3882135-.927715-.0831886-1.3200062l.0831886-.0942074L18.584 4H15c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1h6Z"/></svg>',
    'status': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.1026 4.43011c.5113-.20876 1.0951.0365 1.3038.54781 1.6701 4.09049-.2921 8.76038-4.3825 10.43038-2.36101.964-4.91572.7169-6.97196-.4481-.48051-.2723-.64933-.8826-.37707-1.3631.27226-.4805.8825-.6493 1.36302-.377 1.54625.8761 3.46007 1.0592 5.23001.3366 3.0678-1.2525 4.5394-4.75493 3.2869-7.82279-.2088-.51131.0365-1.09505.5478-1.3038ZM2.19544 9.52389c.06597.25007.14896.49911.24969.74591.10074.2467.21579.4827.34369.7075.27315.48.10544 1.0905-.37457 1.3637-.48001.2731-1.09057.1054-1.36371-.3746-.170573-.2998-.323506-.6136-.457025-.9407-.133519-.327-.243949-.6582-.331921-.9917-.14087-.53399.17784-1.0811.711857-1.22197.534019-.14087 1.081119.17784 1.221989.71186Zm.26371-5.91686c.47709.27823.63829.89053.36007 1.36761-.26431.45322-.46866.93955-.60738 1.44554-.14602.53263-.69618.84604-1.228814.70001C.450396 6.97416.136992 6.424.283019 5.89137c.184683-.67363.456647-1.3209.808521-1.92428.27823-.47708.89053-.63829 1.36761-.36006ZM10.1104.28485c.6737.184683 1.3209.456647 1.9243.80853.4771.27822.6383.89052.3601 1.3676-.2782.47709-.8905.63829-1.3676.36007-.4532-.26431-.9396-.46865-1.44557-.60738-.53263-.14602-.84603-.69618-.70001-1.228813.14603-.53263.69619-.846034 1.22878-.700007ZM7.18978.975282c.14087.534018-.17784 1.081118-.71186 1.221988-.25007.06597-.49914.14896-.74587.24969-.24674.10074-.48272.21579-.7075.3437-.48001.27314-1.09057.10543-1.36371-.37458-.27314-.48001-.10543-1.09057.37458-1.36371.29977-.170572.61362-.323505.94065-.457024.32702-.133519.65823-.243949.99172-.331921.53402-.140869 1.08112.17784 1.22199.711857Z"/></svg>',
    'arrow': '<svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 97.283 97.283" xml:space="preserve" viewBox="0 0 97.283 97.283"><path d="m62.805 83.951 33.894-33.896c.78-.781.78-2.047 0-2.828L62.805 13.332c-.781-.781-2.047-.781-2.828 0l-9.031 9.03c-.375.375-.586.883-.586 1.414 0 .53.211 1.039.586 1.414l14.531 14.534H2c-1.104 0-2 .896-2 2v13.835c0 1.104.896 2 2 2h63.479L50.945 72.091c-.75.75-.75 2.078 0 2.828l9.031 9.031c.375.375.883.586 1.414.586.53.001 1.04-.21 1.415-.585z"/></svg>',
    'ticket': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path d="M156.006 92.548H20.216C9.051 92.548 0 101.599 0 112.764v77.31c0 11.274 9.229 20.123 20.503 20.193 25.086.155 45.447 20.61 45.447 45.733s-20.361 45.579-45.447 45.733C9.229 301.804 0 310.653 0 321.926v77.31c0 11.164 9.051 20.216 20.216 20.216h135.791c3.721 0 6.739-3.016 6.739-6.739V99.287c-.001-3.723-3.019-6.739-6.74-6.739zM492.26 210.312c10.974-.373 19.74-9.23 19.74-20.21v-77.338c0-11.164-9.051-20.216-20.216-20.216h-281.87c-3.721 0-6.739 3.016-6.739 6.739v313.426c0 3.722 3.018 6.739 6.739 6.739h281.87c11.164 0 20.216-9.051 20.216-20.216v-77.338c0-10.98-8.767-19.837-19.74-20.21-58.415-1.988-58.554-89.383 0-91.376zm-95.766 103.015H270.456c-11.164 0-20.216-9.051-20.216-20.216s9.051-20.216 20.216-20.216h126.037c11.164 0 20.216 9.051 20.216 20.216s-9.051 20.216-20.215 20.216zm0-74.223H270.456c-11.164 0-20.216-9.051-20.216-20.216s9.051-20.216 20.216-20.216h126.037c11.164 0 20.216 9.051 20.216 20.216s-9.051 20.216-20.215 20.216z"/></svg>',
    'seat': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path d="M494.908 204.587H460.28l-5.53-88.533c-1.681-26.914-24.124-48-51.098-48h-74.01c-26.59 0-49.015 20.77-51.046 47.292-2.167 28.254-4.992 65.297-6.75 89.242h-24.9l-5.53-88.533c-1.681-26.914-24.124-48-51.098-48h-74.01c-26.59 0-49.015 20.77-51.046 47.292-2.167 28.254-4.992 65.297-6.75 89.242h-41.42C7.663 204.587 0 212.25 0 221.679v17.015c0 6.298 3.456 11.742 8.533 14.711v45.047c0 14.114 11.486 25.6 25.6 25.6h8.533v8.533c0 15.855 10.923 29.107 25.6 32.922v52.412c0 14.114 11.486 25.6 25.6 25.6s25.6-11.486 25.6-25.6v-51.2h68.267v51.627c0 14.114 11.486 25.6 25.6 25.6s25.6-11.486 25.6-25.6V366.72h34.134v51.627c0 14.114 11.486 25.6 25.6 25.6s25.6-11.486 25.6-25.6V366.72h68.267v51.2c0 14.114 11.486 25.6 25.6 25.6s25.6-11.486 25.6-25.6v-52.412c14.677-3.814 25.6-17.067 25.6-32.922v-8.533h8.533c14.114 0 25.6-11.486 25.6-25.6v-45.047c5.077-2.97 8.533-8.414 8.533-14.711V221.68c0-9.43-7.663-17.093-17.092-17.093zm-184.286-60.382 1.109-14.558c1.178-15.394 14.217-27.46 29.687-27.46h50.296c15.684 0 28.732 12.262 29.713 27.913l.887 14.225c.29 4.702-3.285 8.755-7.979 9.054-.188.009-.367.009-.546.009-4.471 0-8.226-3.473-8.508-7.996l-.888-14.225c-.418-6.682-5.99-11.913-12.68-11.913h-50.296c-6.605 0-12.169 5.137-12.672 11.699l-1.101 14.541c-.367 4.693-4.446 8.209-9.156 7.868-4.7-.359-8.225-4.455-7.866-9.157zm-80.196 77.448h49.357l1.818.026-.026 17.041-51.174-.026.025-17.041zM97.289 144.205l1.109-14.558c1.178-15.394 14.216-27.46 29.687-27.46h50.295c15.684 0 28.732 12.262 29.713 27.913l.887 14.225c.29 4.702-3.285 8.755-7.979 9.054-.188.009-.367.009-.546.009-4.471 0-8.226-3.473-8.508-7.996l-.887-14.225c-.418-6.682-5.99-11.913-12.681-11.913h-50.295c-6.605 0-12.169 5.137-12.672 11.699l-1.101 14.541c-.367 4.693-4.437 8.209-9.156 7.868-4.701-.359-8.225-4.455-7.866-9.157zm-80.197 77.448h49.357l1.818.026-.026 17.041-51.174-.026.025-17.041zM51.2 306.987H34.133c-4.702 0-8.533-3.831-8.533-8.533v-42.667h34.133V298.453c0 4.702-3.831 8.534-8.533 8.534zm196.267 42.666H76.8c-9.412 0-17.067-7.654-17.067-17.067v-9.992c.29-.102.546-.256.828-.367.478-.188.93-.401 1.391-.623.947-.444 1.86-.939 2.748-1.493.418-.256.836-.512 1.237-.794 1.007-.717 1.963-1.502 2.859-2.355.188-.179.401-.333.58-.512 1.05-1.058 1.988-2.219 2.842-3.439.23-.341.427-.717.649-1.067.58-.93 1.109-1.886 1.57-2.893.213-.469.401-.939.589-1.425.393-.998.7-2.022.956-3.072.119-.469.256-.922.341-1.399.29-1.527.478-3.089.478-4.702h145.067c0 14.114 11.486 25.6 25.6 25.6v25.6zm0-42.666c-4.702 0-8.533-3.831-8.533-8.533V255.788h34.133V298.454c0 4.702-3.831 8.533-8.533 8.533h-17.067zm204.8 25.6c0 9.412-7.654 17.067-17.067 17.067H264.533v-25.6c14.114 0 25.6-11.486 25.6-25.6H435.2c0 1.613.188 3.174.478 4.702.085.478.222.93.333 1.399.265 1.05.58 2.082.964 3.081.188.478.375.947.589 1.417.461 1.007.99 1.963 1.57 2.893.222.35.418.725.649 1.067.853 1.22 1.792 2.381 2.842 3.439.179.179.393.333.58.512.896.853 1.852 1.638 2.859 2.355.401.282.819.538 1.237.794.887.555 1.801 1.05 2.756 1.502.452.213.905.427 1.382.606.282.119.538.273.828.375v9.991zm34.133-34.134c0 4.702-3.831 8.533-8.533 8.533H460.8c-4.702 0-8.533-3.831-8.533-8.533V255.787H486.4v42.666zm8.508-59.733-51.174-.026.026-17.041 51.174.026-.026 17.041z"/></svg>',
    'reverse': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="m17.6 4.2-4-3a1 1 0 0 0-1.05-.09A.977.977 0 0 0 12 2v2H1a1 1 0 0 0 0 2h11v2a.988.988 0 0 0 .55.89.99.99 0 0 0 1.05-.09l4-3a1 1 0 0 0 0-1.6ZM.4 12.2l4-3a1 1 0 0 1 1.05-.09A.977.977 0 0 1 6 10v2h11a1 1 0 0 1 0 2H6v2a.988.988 0 0 1-.55.89.99.99 0 0 1-1.05-.09l-4-3a1 1 0 0 1 0-1.6Z"/></svg>',
    'ball': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.52 297.52" style="enable-background:new 0 0 297.52 297.52" xml:space="preserve"><path d="M156.553 32.071v59.106l49.044 35.632 48.314-28.126V43.551c-12.99-12.98-28.424-23.527-45.742-31.072l-51.616 19.592zM148.752 104.793l-47.204 34.295 18.031 55.491h58.347l18.031-55.491zM188.314 292.1l27.47-44.303-35.551-37.617h-62.959l-35.546 37.612 27.574 44.345c25.911 7.187 53.055 7.182 79.012-.037zM112.444 4.564l36.308 13.782 36.326-13.788C173.137 1.523 160.956 0 148.771 0c-12.183 0-24.369 1.527-36.327 4.564zM260.039 113.167l-48.415 28.185-19.182 59.034 35.219 37.266 53.026-20.315c1.766-3.411 3.414-6.902 4.931-10.475 6.768-15.945 10.649-32.624 11.642-49.418l-37.221-44.277zM105.063 200.386l-19.182-59.034-48.406-28.18-37.214 44.4c.957 15.893 4.496 31.698 10.635 46.891 1.719 4.254 3.625 8.396 5.695 12.429l53.275 20.738 35.197-37.244zM266.73 239.342l-35.906 13.801-18.668 30.106c21.687-10.19 40.275-25.216 54.574-43.907zM269.512 61.938v38.24l27.061 31.988c-1.509-13.257-4.828-26.392-9.962-39.099-4.51-11.163-10.263-21.584-17.099-31.129zM85.344 283.243l-18.664-30.1-35.927-13.809c14.279 18.664 32.87 33.691 54.591 43.909zM91.908 126.809l49.044-35.632V32.071L89.326 12.475c-17.297 7.528-32.73 18.078-45.732 31.076v55.132l48.314 28.126zM.935 132.163l27.058-31.985V61.931c-6.34 8.853-11.748 18.471-16.106 28.738-5.702 13.434-9.348 27.388-10.952 41.494z"/></svg>',

    // 'tv': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"/></svg>',
    // 'bus': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M12 0C5.437 0 3 2.168 3 8v33c0 1.36.398 2.34 1 3.063V47c0 1.652 1.348 3 3 3h4c1.652 0 3-1.348 3-3v-1h22v1c0 1.652 1.348 3 3 3h4c1.652 0 3-1.348 3-3v-2.938c.602-.722 1-1.703 1-3.062V9c0-4.355-.54-9-7-9Zm3 4h21a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H15c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1Zm-4 7h28c2 0 3 1 3 3v12c0 2-1.953 2.938-3 2.938L11 29c-2 0-3-1-3-3V14c0-2 1-3 3-3Zm-9 1c-1.102 0-2 .898-2 2v8c0 1.102.898 2 2 2Zm46 0v12c1.105 0 2-.898 2-2v-8c0-1.102-.895-2-2-2ZM11.5 34a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7Zm27 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7Z"></path></svg>',
    // 'grade': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="251.74765015 68.00065231 119.00234985 119.00234985"><path d="M363.25 101.372h-12.5v-12.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v12.5h-12.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h12.5v12.5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-12.5h12.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="M317.564 132.804c-.015-.038-.03-.075-.046-.112l-19.339-46.69c-1.16-2.803-3.896-4.63-6.929-4.63s-5.769 1.827-6.929 4.63l-19.346 46.705c-.011.025-.021.05-.031.076l-12.623 30.475c-1.586 3.827.231 8.214 4.059 9.799 3.826 1.589 8.214-.231 9.799-4.059l10.703-25.84h28.736l10.703 25.84c1.196 2.889 3.988 4.632 6.932 4.632.956 0 1.929-.185 2.867-.573 3.827-1.585 5.645-5.972 4.059-9.799l-12.615-30.454zm-34.469-4.646 8.155-19.688 8.155 19.688h-16.31z"/></svg>',
    // 'reddit': '<svg data-bbox="1.959 3 46.082 42" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M29 3c-2.105 0-4.566 1.652-4.938 9.031.313-.008.622-.031.938-.031.352 0 .715.02 1.063.031C26.3 7.598 27.355 5 29 5c.703 0 1.102.383 1.844 1.188.867.94 2 2.164 4.218 2.625A6.215 6.215 0 0 1 35 8c0-.422.043-.82.125-1.219-1.375-.375-2.102-1.168-2.813-1.937C31.52 3.984 30.61 3 29 3zm12 1c-2.207 0-4 1.797-4 4 0 2.203 1.793 4 4 4s4-1.797 4-4c0-2.203-1.793-4-4-4zM25 14C12.867 14 3 20.18 3 29s9.867 16 22 16 22-7.18 22-16-9.867-15-22-15zm-17.5.938c-1.46 0-2.848.597-3.906 1.656-1.723 1.722-2.078 4.199-1.094 6.25 1.512-2.926 4.113-5.422 7.469-7.282-.762-.386-1.606-.624-2.469-.624zm35 0c-.863 0-1.707.238-2.469.624 3.356 1.86 5.957 4.356 7.469 7.282.984-2.051.629-4.528-1.094-6.25-1.058-1.059-2.445-1.657-3.906-1.657zM17 23a3 3 0 1 1-.002 6.002A3 3 0 0 1 17 23zm16 0a3 3 0 1 1-.002 6.002A3 3 0 0 1 33 23zM16.062 34c.25.043.497.184.657.406.105.149 2.449 3.282 8.281 3.282 5.91 0 8.258-3.22 8.281-3.25.317-.45.953-.57 1.407-.25.449.316.535.921.218 1.374-.117.168-2.968 4.126-9.906 4.126-6.941 0-9.79-3.958-9.906-4.126-.317-.453-.235-1.058.219-1.374.226-.16.5-.231.75-.188z" /></g></svg>',
    // 'brightspace': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.048 513.048"><path d="M486.924 51.2h-204.8V25.6c0-12.8-12.8-25.6-25.6-25.6-15.36 0-25.6 12.8-25.6 25.6v25.6h-204.8c-15.36 0-25.6 12.8-25.6 25.6V384c0 15.36 10.24 25.6 25.6 25.6h115.2l-35.84 64c-5.12 12.8-2.56 28.16 10.24 35.84 12.8 5.12 28.16 2.56 35.84-10.24l48.64-89.6h112.64l48.64 89.6c7.68 12.8 25.6 17.92 35.84 10.24 12.8-7.68 17.92-23.04 10.24-35.84l-35.84-64h115.2c12.8 0 25.6-10.24 25.6-25.6V76.8c0-15.36-12.8-25.6-25.6-25.6z"/></svg>',
    // 'camera': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.174 36.174"><path d="M23.921 20.528c0 3.217-2.617 5.834-5.834 5.834s-5.833-2.617-5.833-5.834 2.616-5.834 5.833-5.834 5.834 2.618 5.834 5.834zm12.253-8.284v16.57a4 4 0 01-4 4H4a4 4 0 01-4-4v-16.57a4 4 0 014-4h4.92V6.86a3.5 3.5 0 013.5-3.5h11.334a3.5 3.5 0 013.5 3.5v1.383h4.92c2.209.001 4 1.792 4 4.001zm-9.253 8.284c0-4.871-3.963-8.834-8.834-8.834-4.87 0-8.833 3.963-8.833 8.834s3.963 8.834 8.833 8.834c4.871 0 8.834-3.963 8.834-8.834z"/></svg>',
    // // 'calendar': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 169v-59c0-24.813-20.187-45-45-45h-6v55c0 8.284-6.716 15-15 15s-15-6.716-15-15V40c0-8.284-6.716-15-15-15s-15 6.716-15 15v25H301v55c0 8.284-6.716 15-15 15s-15-6.716-15-15V40c0-8.284-6.716-15-15-15s-15 6.716-15 15v25H141v55c0 8.284-6.716 15-15 15s-15-6.716-15-15V40c0-8.284-6.716-15-15-15s-15 6.716-15 15v25H45C20.187 65 0 85.187 0 110v59zM0 199v243c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45V199H0zm144 208h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm128 128h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm128 128h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/></svg>',
    // 'calendar': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.121 29.121" style="enable-background:new 0 0 29.121 29.121" xml:space="preserve"><path d="M21.706 6.146c1.116 0 2.02-.898 2.02-2.016V2.02c0-1.119-.903-2.02-2.02-2.02s-2.019.9-2.019 2.02v2.111c.001 1.117.903 2.015 2.019 2.015z"/><path d="M28.882 3.494h-4.066v1.027c0 1.695-1.377 3.076-3.075 3.076-1.7 0-3.074-1.381-3.074-3.076V3.494h-8.205v1.027c0 1.695-1.379 3.076-3.076 3.076s-3.075-1.38-3.075-3.076V3.494L.208 3.443v25.678h26.656l2.049-.006-.031-25.621zm-2.02 23.582H2.26V10.672h24.604v16.404h-.002z"/><path d="M7.354 6.146c1.116 0 2.021-.898 2.021-2.016V2.02C9.375.9 8.47 0 7.354 0S5.336.9 5.336 2.02v2.111c0 1.117.901 2.015 2.018 2.015z"/><path d="M10.468 12.873h3.231v2.852h-3.231z"/><path d="M15.692 12.873h3.234v2.852h-3.234z"/><path d="M20.537 12.873h3.231v2.852h-3.231z"/><path d="M10.468 17.609h3.231v2.85h-3.231z"/><path d="M15.692 17.609h3.234v2.85h-3.234z"/><path d="M20.537 17.609h3.231v2.85h-3.231z"/><path d="M10.468 22.439h3.231v2.85h-3.231z"/><path d="M5.336 17.609h3.229v2.85H5.336z"/><path d="M5.336 22.439h3.229v2.85H5.336z"/><path d="M15.692 22.439h3.234v2.85h-3.234z"/><path d="M20.537 22.439h3.231v2.85h-3.231z"/></svg>',
    
    'outlook': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1.5190010070800781 12.5775146484375 497.6650085449219 497.6650085449219"><path d="M432.828 23.637h-276.48c-18.325 0-33.176 14.851-33.176 33.18v22.117h342.832V56.816c0-18.328-14.852-33.18-33.176-33.18zm43.574 470.015c-6.304 3.54-13.714 5.532-21.457 5.532H134.23c-24.44 0-44.238-19.797-44.238-44.239V388.59h99.531c12.055 0 23.227-3.871 32.293-10.504zm22.782-170.53v131.823c0 7.965-2.102 15.485-5.973 22.008l-173.852-78.851zM366.473 101.05h99.53v77.414h-99.53zm-121.653 0h99.535v77.414H244.82zm121.653 99.535h99.53V278h-99.53zm-121.653 0h99.535V278H244.82zm99.535 99.531v63.59l-52.53 21.898-47.005-21.343v-64.145zm121.649 0v12.828l-99.531 41.582v-54.41zm-243.3-199.066v33.18c-9.18-6.97-20.68-11.06-33.18-11.06h-66.352v-22.12zm-33.18 265.422H34.694c-18.324 0-33.175-14.852-33.175-33.176V178.465c0-18.324 14.851-33.176 33.175-33.176h154.828c18.329 0 33.18 14.852 33.18 33.176v154.832c0 18.324-14.851 33.176-33.18 33.176zm-77.415-176.95c-38.882 0-62.304 29.707-62.304 66.356 0 36.652 23.332 66.355 62.304 66.355 38.985 0 62.309-29.703 62.309-66.343 0-36.66-23.422-66.368-62.309-66.368zm0 110.317c-22.062 0-35.242-19.672-35.242-43.95 0-24.273 13.246-43.949 35.242-43.949 22 0 35.258 19.688 35.258 43.95 0 24.265-13.203 43.949-35.258 43.949zm0 0"></path></svg>',
    'onedrive': '<svg data-bbox="0 9.594 50.023 30.407" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"> <g> <path d="M27.406 9.594c-1.816 0-3.379.355-4.75 1.094-1.418.707-2.996 2.019-3.75 3.093-.281.375-.543.719-.718.938-2.086-.79-4.56-.89-6.282-.281-3.539 1.14-6.11 4.582-6.219 8.374 0 .215-.011.422-.03.594-.036.012-.087.02-.126.032-2.215.582-3.992 1.968-4.906 3.843C-.012 28.2 0 28.785 0 30.406c0 1.746-.004 2.153.594 3.219.93 1.973 2.976 3.695 4.937 4.156.516.145 2.801.196 4.969.219-.969-1.543-1.5-3.438-1.5-5.594 0-1.484.156-2.37.625-3.468 1.008-2.442 3.371-4.317 6.375-5.125.059-.192.113-.407.188-.594 1.015-2.899 2.917-5.309 5.093-6.469l.032-.031h.03c2.063-1.032 3.321-1.313 5.657-1.313 3.441 0 5.559.864 7.938 3.281.886-.23 1.78-.375 2.687-.375.309 0 .61.036.906.063-.09-.297-.18-.602-.281-.906-1.668-4.785-5.922-7.875-10.844-7.875zM27 17.406c-2.016 0-3 .203-4.781 1.094-1.754.934-3.309 3-4.157 5.438-.199.496-.347 1.039-.375 1.437-.113.05-.304.145-.687.25-2.633.57-4.715 2.082-5.531 4.063-.367.863-.469 1.511-.469 2.718 0 3.828 1.89 6.547 5.219 7.469.039.012.082.023.125.031.77.11 3.86.094 15.343.094H46a.94.94 0 0 0 .438-.094l.624-.312c1.657-.828 2.688-2.574 2.938-4.938.23-3.351-1.242-5.668-4.281-6.718l-.282-.094-.03-.532c-.36-4.046-3.637-7-7.782-7-.996 0-1.98.192-2.938.532l-.312.093-.656-.625C31.625 18.105 30 17.407 27 17.407z" /></g></svg>',
    'notion': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.18999999999999906 487.619 510.941"><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fill-rule="evenodd" /></svg>',
    'gmail': '<svg data-bbox="1 7 48 36" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M5.5 7C3.02 7 1 9.02 1 11.5v.426L25 29l24-17.074V11.5C49 9.02 46.98 7 44.5 7zm.852 2h37.293L25 22zM1 14.027V38.5C1 40.98 3.02 43 5.5 43h39c2.48 0 4.5-2.02 4.5-4.5V14.027l-6 4.27V41H7V18.297z" /></g></svg>',



}

// function iconLoad() {
//     for (const icon in iconData) {
//         for (const elem of document.getElementsByName(icon)) {
//             elem.innerHTML = iconData[icon]
//         }
//     }
// }

const thumbData = {
    'tv': 'tv.png',
    'user': 'account.png',
    'globe': 'globe.png',
    'more': 'plus.png',
    'atom': 'molecule.png',
    'work': 'work.png',
    'diamond': 'diamond.png',
    'course': 'course.png',
    'book': 'book.png',
    'plane': 'plane.png',
    'folder': 'folder.png',
    'check': 'check.png',
    'note': 'note.png',
    'pod': 'podcasts.png',
    'svg': 'svg.png',
    'finance': 'finance.png',
    'calculus': 'calculus.png',
    'gym': 'gym.png',

    // brands
    'iberia': 'iberia.jpeg',
    'british': 'ba.jpeg'


}