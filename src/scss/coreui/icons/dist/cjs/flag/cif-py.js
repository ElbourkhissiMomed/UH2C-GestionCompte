'use strict';

var cifPy = ["301 181", "<g fill='none' fill-rule='evenodd'><path fill='#FFF' fill-rule='nonzero' d='M.5.5h300v180H.5z'/><path fill='#0038A8' fill-rule='nonzero' d='M.5 120.5h300v60H.5z'/><path fill='#D52B1E' fill-rule='nonzero' d='M.5.5h300v60H.5z'/><path stroke='#000' stroke-linecap='round' stroke-width='.93' d='M173.517 90.5c.001 12.712-10.303 23.018-23.014 23.019-12.712.001-23.017-10.303-23.019-23.014V90.5c-.001-12.712 10.303-23.018 23.014-23.019 12.712-.001 23.017 10.303 23.019 23.014v.005z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M153.542 79.752s8.756 3.772 7.227 11.567-6.403 7.743-8.315 8.605c-1.911.861-3.23 2.094-3.984 1.922-.754-.173-1.751-.754-1.751-.754s-.08 1.28 1.455 1.513c1.535.233 3.553-2.021 4.523-2.271.969-.25 6.921-.896 8.369-8.828 1.689-8.467-7.47-11.506-7.524-11.754z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M157.965 81.412c.164.643.167 1.174.008 1.186-.159.012-.421-.499-.585-1.142h0c-.164-.643-.168-1.174-.008-1.186.159-.012.42.499.585 1.142z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M157.66 81.492c.304.613.433 1.153.289 1.206-.144.053-.507-.4-.81-1.013l-.001-.002c-.304-.613-.433-1.153-.289-1.206.144-.053.507.4.81 1.013l.001.002z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M156.786 82.071c.621.182 1.112.462 1.097.625-.015.164-.531.149-1.151-.033h0c-.621-.182-1.112-.462-1.097-.625.014-.163.53-.148 1.151.033h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M156.914 81.753c.565.379.968.799.899.937-.069.139-.583-.057-1.148-.435l-.003-.002c-.565-.379-.968-.798-.899-.937.069-.138.583.057 1.148.436.001-.001.002 0 .003.001z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M157.284 81.6c.48.499.784.991.679 1.099-.105.108-.58-.209-1.06-.708-.48-.499-.784-.991-.679-1.099.105-.109.58.209 1.06.708z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M157.895 82.698c.005.005-.338.19-.415.218-.078.028-.183-.103-.406.011a.965.965 0 00-.425.446c-.049.122.063.174.333.043s.341-.339.471-.42c.13-.081.348-.201.473-.245.054-.117.228-.369.319-.514.09-.144.444-.383.573-.66.113-.23.07-.425-.08-.343-.151.082-.345.312-.436.478-.091.166-.013.376-.113.532-.081.112-.273.454-.294.454h0zM160.605 83.597c.015.994-.156 1.757-.38 1.705-.225-.052-.418-.9-.433-1.894v-.006c-.014-.994.156-1.757.381-1.705.225.052.418.9.433 1.894l-.001.006z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.157 83.577c.217 1.013.217 1.844 0 1.855-.217.011-.569-.802-.786-1.815h0c-.217-1.014-.217-1.844 0-1.855.217-.012.569.801.786 1.815h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M158.755 84.015c.8.538 1.389 1.159 1.315 1.388-.074.229-.782-.022-1.581-.56l-.006-.004c-.8-.538-1.388-1.159-1.315-1.388.073-.229.782.022 1.581.56a.02.02 0 01.006.004z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M159.038 83.616c.658.796 1.077 1.577.936 1.745-.141.168-.788-.342-1.446-1.138l-.004-.004c-.657-.796-1.074-1.576-.931-1.741.142-.166.789.344 1.445 1.138z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M159.601 83.562c.5.929.76 1.772.58 1.882-.18.11-.732-.554-1.232-1.484l-.005-.009c-.5-.929-.76-1.772-.579-1.882.18-.11.732.554 1.232 1.483a.03.03 0 00.004.01z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.084 85.409c.005.01-.531.121-.647.126-.117.005-.219-.23-.566-.166a1.253 1.253 0 00-.737.449c-.109.154.03.277.447.21.417-.067.584-.333.791-.391.207-.058.549-.132.735-.14.113-.144.439-.426.611-.593.173-.166.742-.349 1.013-.689.232-.278.238-.577.003-.528-.236.049-.582.293-.762.49-.18.197-.142.534-.333.711-.148.126-.527.53-.555.521h0zM162.033 87.225c-.166.984-.47 1.704-.68 1.607-.21-.096-.246-.972-.08-1.956.165-.984.47-1.704.679-1.608.21.097.246.973.081 1.957h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M161.598 87.119c.03 1.043-.12 1.864-.334 1.833-.214-.03-.412-.9-.441-1.942v-.003c-.03-1.043.12-1.864.334-1.833.214.03.412.9.442 1.942l-.001.003z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.149 87.282c.685.685 1.148 1.411 1.034 1.622-.114.211-.761-.173-1.446-.858l-.003-.003c-.685-.685-1.148-1.411-1.034-1.622.114-.211.761.173 1.445.858l.004.003z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.497 86.942c.499.912.768 1.764.6 1.903-.168.139-.709-.489-1.208-1.401l-.003-.006c-.499-.912-.768-1.764-.6-1.903.168-.139.709.489 1.208 1.401l.003.006z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M161.057 86.998c.321 1.014.423 1.896.227 1.97-.196.074-.615-.688-.937-1.702l-.003-.01c-.321-1.014-.423-1.896-.227-1.969.196-.074.615.688.937 1.702a.046.046 0 01.003.009z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M161.196 88.914c.003.011-.541.018-.656 0-.115-.018-.173-.269-.523-.272a1.224 1.224 0 00-.801.302c-.133.131-.021.28.399.294.42.014.631-.216.844-.234.213-.018.56-.025.744.003.137-.12.506-.337.705-.468.199-.131.789-.202 1.114-.486.277-.23.337-.524.098-.521-.239.003-.621.177-.833.337-.212.16-.236.5-.454.638-.167.095-.611.421-.637.407h0zM162.138 91.277c-.532.844-1.087 1.386-1.24 1.211-.153-.176.154-1.003.686-1.847l.001-.001c.532-.844 1.087-1.386 1.24-1.211.153.175-.155 1.002-.686 1.847l-.001.001z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M161.786 90.998c-.378.979-.832 1.679-1.015 1.564-.183-.116-.024-1.003.354-1.982l.002-.006c.379-.979.832-1.676 1.013-1.557.182.118.023 1.004-.354 1.981z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.411 90.55c.354.919.49 1.782.305 1.93-.185.148-.622-.477-.976-1.395s-.49-1.782-.305-1.93c.185-.147.622.477.976 1.395h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.858 90.38c.098 1.053.01 1.952-.196 2.01-.206.057-.452-.75-.55-1.802h0c-.098-1.053-.009-1.952.197-2.009.206-.059.452.748.549 1.801h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M161.344 90.662c-.103 1.073-.354 1.931-.56 1.915-.206-.015-.289-.897-.186-1.971.103-1.073.354-1.93.56-1.915.206.016.289.898.186 1.971z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.725 92.497a4.918 4.918 0 01-.594-.271c-.097-.064-.052-.321-.368-.469a1.17 1.17 0 00-.842-.051c-.172.066-.127.251.247.437s.655.06.855.132c.2.071.517.208.673.311.171-.055.589-.103.82-.143.231-.039.792.138 1.197.01.34-.099.509-.347.291-.443-.218-.096-.632-.092-.885-.032-.254.06-.407.366-.659.404-.189.02-.717.139-.735.115h0zM161.047 95.384c-.863.74-1.652 1.137-1.763.888-.11-.249.5-1.051 1.363-1.79l.001-.001c.863-.74 1.652-1.137 1.763-.888.11.249-.5 1.051-1.363 1.79l-.001.001z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.751 94.949c-.738.944-1.468 1.553-1.631 1.36-.163-.193.303-1.116 1.04-2.06a.018.018 0 00.005-.007c.738-.944 1.468-1.553 1.631-1.359.163.193-.303 1.115-1.04 2.06a.027.027 0 00-.005.006z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M159.384 93.958c.088 1.141-.045 2.146-.297 2.244-.253.098-.529-.747-.616-1.889l-.001-.008c-.088-1.141.045-2.146.297-2.244.253-.098.529.747.616 1.889l.001.008z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M159.932 93.931c-.239 1.197-.631 2.158-.877 2.147-.246-.011-.251-.991-.013-2.188h0c.239-1.197.631-2.158.877-2.147.246.012.252.991.013 2.188z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M160.374 94.419c-.466 1.147-1.024 2.003-1.246 1.911-.221-.091-.023-1.095.444-2.242.466-1.147 1.024-2.003 1.246-1.911.221.091.022 1.095-.444 2.242z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M159.09 96.22a5.829 5.829 0 01-.565-.514c-.086-.106.048-.373-.251-.651s-.699-.373-.91-.362c-.211.011-.223.231.128.572.351.341.702.304.898.455.196.151.501.417.638.586.206.001.682.099.949.139.267.04.827.439 1.315.444.407.014.674-.199.465-.383-.209-.184-.665-.331-.964-.356-.299-.025-.568.257-.858.207-.213-.044-.833-.104-.845-.137zM158.231 98.978c-1.237.205-2.217.126-2.188-.174.028-.301 1.054-.71 2.291-.914l.006-.001c1.237-.204 2.216-.127 2.188.174-.029.301-1.054.71-2.291.914l-.006.001z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M158.183 98.393c-1.228.471-2.264.626-2.314.347-.05-.279.905-.887 2.133-1.358l.002-.001c1.228-.471 2.264-.626 2.314-.347.05.279-.905.887-2.133 1.358l-.002.001z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M157.406 96.66c-.539 1.136-1.216 2.013-1.512 1.958-.296-.055-.099-1.02.44-2.157.539-1.136 1.216-2.013 1.512-1.958.295.055.099 1.02-.44 2.157z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M157.95 96.952c-.884 1-1.788 1.687-2.018 1.533-.23-.153.299-1.087 1.182-2.087.884-1 1.788-1.688 2.02-1.536.232.152-.297 1.086-1.181 2.087l-.003.003z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M158.109 97.671c-1.076.821-2.083 1.314-2.248 1.1-.165-.214.573-1.053 1.65-1.875l.005-.004c1.077-.821 2.082-1.311 2.244-1.095.162.216-.576 1.054-1.651 1.874z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M155.886 98.641c-.011.008-.239-.665-.265-.815-.025-.15.25-.327.113-.764s-.472-.759-.681-.87c-.21-.111-.341.091-.189.618.152.528.512.694.618.952.107.257.255.686.296.927.198.12.604.488.84.681.236.193.558.896 1.027 1.183.385.248.759.2.658-.096-.101-.296-.461-.699-.736-.896-.275-.197-.689-.085-.941-.299-.18-.167-.746-.582-.74-.621zM154.535 100.992c-1.271.018-2.299-.263-2.295-.629.003-.364 1.031-.674 2.299-.694 1.271-.018 2.299.263 2.295.629-.003.365-1.031.675-2.299.694z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M154.23 98.925c-.805 1.04-1.678 1.699-1.949 1.472-.271-.226.162-1.253.968-2.293h0c.805-1.04 1.678-1.699 1.948-1.472.272.227-.161 1.253-.967 2.293z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M154.555 99.981c-1.182.509-2.243.648-2.372.311-.128-.337.724-1.023 1.904-1.532 1.182-.509 2.243-.648 2.372-.311s-.723 1.023-1.904 1.532zM155.182 79.951c.585.527.938 1.02.787 1.101-.15.081-.745-.279-1.33-.805-.585-.527-.939-1.02-.789-1.102.149-.082.745.278 1.33.805l.002.001z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M154.475 80.543c.791.103 1.457.319 1.488.483.03.164-.586.214-1.378.111h0c-.791-.103-1.458-.319-1.488-.483-.03-.164.586-.214 1.378-.111z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M154.759 80.17c.745.379 1.286.792 1.207.922-.079.13-.746-.072-1.492-.451l-.003-.001c-.745-.379-1.284-.792-1.204-.921.08-.13.748.072 1.492.451zM144.386 98.751s1.929.414 3.605 1.023c1.677.609 4.224 2.701 4.909 2.82.768.035 1.833-.227 2.237-1.336-1.183.315-1.892.795-3.021.174-.399-.151-1.705-1.341-3.138-1.977-1.432-.637-4.32-1.363-4.32-1.363l-.272.659zM146.442 81.316c-.007-.016 2.22-1.171 2.22-1.171l-2.448.626-.284.431.512.114z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M148.548 81.856c-.86-.156-2.181-.445-3.023-.513.582-.644 1.383-1.734 1.877-2.403-.326.638-.838 1.479-1.04 2.09.593.32 1.524.571 2.186.826z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.041 81.452c-.01-.015 1.973-1.527 1.973-1.527l-2.291 1.025-.204.474.522.028z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M148.15 81.833c-.865-.165-2.197-.468-3.043-.541.571-.664 1.355-1.787 1.838-2.476-.315.658-.813 1.526-1.004 2.156.6.333 1.539.595 2.209.861z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.714 81.575c-.005-.017 2.323-.973 2.323-.973l-2.502.412-.323.403.502.158z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.89 81.852c-.875-.073-2.229-.236-3.074-.218.487-.737 1.13-1.964 1.527-2.717-.234.703-.625 1.639-.74 2.301.633.272 1.593.436 2.287.634z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.479 81.585c-.013-.013 1.574-1.918 1.574-1.918l-1.994 1.491-.093.509.513-.082z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.875 81.979c-.938-.018-2.393-.101-3.289-.021.444-.838 1.004-2.223 1.35-3.073-.178.784-.499 1.833-.555 2.563.7.253 1.737.364 2.494.531z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.16 82.04c-.012-.017 1.911-1.834 1.911-1.834l-2.313 1.279-.159.548.561.007z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.457 82.041c-1.008.004-2.56-.051-3.544.059.652-.935 1.544-2.474 2.093-3.42-.355.868-.918 2.032-1.13 2.838.704.261 1.799.358 2.581.523z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.516 82.176c-.01-.018 2.441-2.068 2.441-2.068l-2.759 1.467-.284.608.602-.007z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.092 82.102c-.998.144-2.544.306-3.503.551.512-1.002 1.175-2.627 1.583-3.625-.227.896-.619 2.109-.713 2.923.735.157 1.834.099 2.633.151z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.191 82.584c-.014-.015 1.881-2.606 1.881-2.606l-2.348 2.123-.126.65.593-.167z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.54 82.411c-1.005.094-2.558.178-3.529.374.568-.975 1.321-2.563 1.786-3.539-.277.883-.737 2.074-.876 2.883.724.192 1.825.19 2.619.282z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.851 82.859c-.01-.018 2.395-2.072 2.395-2.072l-2.717 1.464-.275.611.597-.003h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.246 82.517c-1.002.211-2.557.479-3.514.787.468-1.024 1.056-2.671 1.42-3.683-.185.898-.52 2.121-.575 2.931.751.103 1.859-.031 2.669-.035z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.451 82.966c-.016-.012 1.53-2.84 1.53-2.84l-2.07 2.456-.034.649.574-.265h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.246 82.676c-1.075.28-2.75.647-3.764 1.032.389-1.164.835-3.029 1.111-4.175-.093 1.012-.313 2.392-.274 3.299.837.082 2.038-.116 2.927-.156z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.151 83.623c-.016-.017 1.927-2.846 1.927-2.846l-2.464 2.301-.104.718.641-.173z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.82 83.002c-1.057.334-2.707.787-3.698 1.222.333-1.171.689-3.038.91-4.185-.046 1.005-.199 2.38-.118 3.274.837.036 2.023-.224 2.906-.311z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.764 84.041c-.019-.013 1.465-3.142 1.465-3.142l-2.083 2.706.009.722.609-.286z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.417 83.429c-1.083.247-2.766.563-3.793.916.438-1.14.962-2.972 1.286-4.098-.137.998-.415 2.357-.415 3.254.83.105 2.035-.057 2.922-.072z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.417 84.344c-.013-.019 2.394-2.459 2.394-2.459l-2.822 1.821-.23.691.658-.053z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.934 83.856c-1.072.144-2.736.299-3.761.556.498-1.117 1.123-2.93 1.509-4.043-.195 1.002-.55 2.358-.606 3.271.804.189 1.991.143 2.858.216z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.943 84.098c-.018-.015 1.629-3.077 1.629-3.077l-2.209 2.589-.035.733.615-.245h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.069 83.491c-1.166.478-2.988 1.143-4.081 1.732.358-1.385.736-3.578.97-4.926-.042 1.168-.2 2.774-.102 3.803.927-.03 2.237-.433 3.213-.609z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.719 85.027c-.019-.017 1.949-3.531 1.949-3.531l-2.573 2.988-.071.834.695-.291z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.619 83.925c-1.143.537-2.931 1.297-3.996 1.939.296-1.384.575-3.567.749-4.908.01 1.153-.076 2.744.067 3.752.924-.081 2.214-.553 3.18-.783z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.318 85.561c-.021-.012 1.422-3.8 1.422-3.8l-2.129 3.394.054.823.653-.417z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.121 84.242c-1.14.546-2.925 1.32-3.986 1.971.287-1.386.553-3.569.718-4.911.018 1.152-.059 2.743.091 3.749.923-.09 2.211-.572 3.177-.809z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141 86.014c-.017-.018 2.201-3.351 2.201-3.351l-2.775 2.742-.135.831.709-.222z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.013 84.068c-1.017.812-2.625 2.005-3.541 2.896-.001-1.399-.189-3.555-.302-4.881.255 1.098.508 2.64.864 3.564.896-.319 2.072-1.106 2.979-1.579z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.106 86.177c-.024-.003.255-4.015.255-4.015l-1.06 3.904.296.735.509-.624z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.725 84.439c-1.02.806-2.632 1.991-3.552 2.878.004-1.4-.174-3.558-.282-4.884.251 1.1.497 2.643.849 3.57.897-.315 2.076-1.097 2.985-1.564z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.851 86.856c-.023-.01 1.025-3.923 1.025-3.923l-1.775 3.608.14.806.61-.491z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.612 84.534c-.963.949-2.497 2.357-3.349 3.377-.151-1.436-.575-3.627-.833-4.974.381 1.097.807 2.651 1.274 3.558.89-.43 2.021-1.372 2.908-1.961z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.857 87.357c-.025-.003.192-4.173.192-4.173l-1.025 4.054.318.765.515-.646z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.306 85.226c-1.031.853-2.664 2.106-3.59 3.041-.032-1.454-.273-3.693-.419-5.069.287 1.139.582 2.738.97 3.696.917-.34 2.113-1.169 3.039-1.668z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.549 87.835c-.022-.013 1.453-3.925 1.453-3.925l-2.178 3.477.057.861.668-.413z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.289 85.242c-.913.965-2.365 2.398-3.172 3.434-.144-1.455-.548-3.676-.794-5.041.362 1.112.767 2.685 1.21 3.604.844-.438 1.916-1.397 2.756-1.997z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.606 88.034c-.026 0-.172-4.149-.172-4.149l-.672 4.133.385.718.459-.702z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.841 85.551c-.883.974-2.292 2.42-3.067 3.464-.187-1.456-.655-3.675-.941-5.04.394 1.11.845 2.682 1.314 3.598.831-.446 1.873-1.415 2.694-2.022z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.372 88.446c-.023-.007.463-4.215.463-4.215l-1.236 3.987.246.819.527-.591z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.652 85.715c-.807 1.055-2.104 2.63-2.798 3.745-.297-1.43-.933-3.592-1.322-4.922.477 1.065 1.047 2.585 1.585 3.451.795-.524 1.761-1.59 2.535-2.274z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.355 88.841c-.024-.001-.267-4.22-.267-4.22l-.531 4.187.383.738.415-.705z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.568 85.958c-.758 1.105-1.98 2.759-2.621 3.917-.371-1.424-1.119-3.568-1.577-4.886.534 1.048 1.182 2.548 1.767 3.392.772-.57 1.688-1.694 2.431-2.423z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.619 89.236c-.023-.008.429-4.239.429-4.239l-1.208 3.985.255.834.524-.58z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.415 86.35c-.653 1.203-1.719 3.018-2.251 4.259-.496-1.364-1.432-3.391-2.006-4.639.624.968 1.404 2.369 2.06 3.126.715-.673 1.524-1.917 2.197-2.746z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.471 89.585c-.024.007-1.185-4.02-1.185-4.02l.401 4.237.534.598.25-.815z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.391 86.82c-.681 1.2-1.789 3.009-2.346 4.246-.499-1.36-1.445-3.381-2.025-4.625.634.964 1.424 2.362 2.092 3.117.741-.672 1.582-1.912 2.279-2.738z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.525 90.342c-.025 0-.435-4.227-.435-4.227l-.392 4.228.423.724.404-.725z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.459 87.189c-.7 1.184-1.838 2.967-2.414 4.191-.477-1.371-1.39-3.415-1.95-4.672.618.979 1.385 2.395 2.041 3.166.752-.655 1.613-1.875 2.323-2.685z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.483 90.681c-.025.003-.784-4.151-.784-4.151l-.038 4.251.481.669.341-.769z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.159 87.787c-.755 1.133-1.975 2.835-2.609 4.018-.411-1.403-1.225-3.507-1.723-4.801.57 1.021 1.269 2.488 1.887 3.303.78-.601 1.697-1.76 2.445-2.52z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M140.12 91.142c-.025-.006.351-4.243.351-4.243l-1.156 4.023.28.82.525-.6z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.205 87.895c-.645 1.228-1.701 3.082-2.222 4.342-.539-1.338-1.543-3.317-2.159-4.535.662.937 1.492 2.3 2.182 3.026.721-.703 1.526-1.978 2.199-2.833z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M139.976 91.496c-.024.008-1.302-3.954-1.302-3.954l.501 4.205.561.572.24-.823z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.028 88.211c-.451 1.347-1.211 3.4-1.534 4.752-.731-1.197-2.018-2.922-2.807-3.984.792.776 1.815 1.933 2.603 2.496.603-.849 1.204-2.278 1.738-3.264z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.136 91.819c-.024.009-1.41-3.9-1.41-3.9l.616 4.182.577.55.217-.832z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.017 88.621c-.441 1.351-1.186 3.413-1.499 4.767-.74-1.189-2.039-2.901-2.836-3.954.798.768 1.828 1.914 2.621 2.469.598-.855 1.188-2.29 1.714-3.282z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.147 92.484c-.023.012-1.814-3.647-1.814-3.647l1.056 4.05.63.456.128-.859z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.88 88.963c-.282 1.403-.784 3.553-.939 4.942-.871-1.073-2.356-2.583-3.268-3.514.88.647 2.034 1.636 2.884 2.072.494-.934.915-2.441 1.323-3.5z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.266 93.056c-.025.005-.978-4.09-.978-4.09l.161 4.246.512.635.305-.791z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.885 89.398c-.149 1.435-.447 3.642-.472 5.045-.964-.95-2.578-2.254-3.569-3.057.933.525 2.17 1.354 3.054 1.673.404-.995.681-2.552.987-3.661z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.313 93.357c-.019.019-2.586-2.953-2.586-2.953l1.949 3.576.712.243-.075-.866z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.94 89.9c-.155 1.434-.462 3.64-.492 5.042-.96-.956-2.569-2.268-3.557-3.078.931.53 2.165 1.366 3.048 1.691.407-.992.69-2.547 1.001-3.655z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.603 94.041c-.022.013-1.986-3.559-1.986-3.559l1.248 3.995.652.426.086-.862z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.056 90.49c-.094 1.442-.309 3.666-.279 5.069-.998-.897-2.659-2.111-3.679-2.86.951.474 2.218 1.234 3.112 1.505.365-1.017.582-2.589.846-3.714z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M141.854 94.692c-.02.018-2.454-3.111-2.454-3.111l1.789 3.693.701.288-.036-.87z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.083 91.153c-.086 1.443-.287 3.669-.249 5.072-1.003-.888-2.672-2.089-3.696-2.828.954.465 2.225 1.215 3.121 1.478.359-1.02.567-2.593.824-3.722z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.076 95.221c-.023.011-1.721-3.751-1.721-3.751l.952 4.107.619.493.15-.849z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.148 91.583c.049 1.448.057 3.69.224 5.082-1.078-.749-2.844-1.719-3.929-2.318.99.335 2.32.91 3.233 1.051.262-1.064.322-2.658.472-3.815z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.377 95.077c-.015.024-3.143-2.152-3.143-2.152l2.664 2.936.74.038-.261-.822z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.247 91.74c.125 1.442.25 3.676.49 5.057-1.119-.706-2.938-1.606-4.056-2.162 1.009.296 2.371.819 3.293.925.207-1.069.183-2.66.273-3.82z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.715 95.877c-.019.018-2.618-3.01-2.618-3.01l1.983 3.614.717.261-.082-.865z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.474 92.289c.185 1.436.405 3.665.703 5.033-1.145-.639-2.996-1.431-4.133-1.92 1.018.236 2.397.677 3.32.728.16-1.083.07-2.674.11-3.841z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.239 96.383c-.015.023-3.119-2.204-3.119-2.204l2.631 2.979.74.051-.252-.826z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.572 92.899c.28 1.419.645 3.628 1.032 4.968-1.179-.531-3.07-1.148-4.232-1.529 1.026.139 2.426.45 3.346.414.087-1.099-.109-2.682-.146-3.853z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.584 96.821c-.019.018-2.58-3.058-2.58-3.058l1.936 3.649.714.275-.07-.866z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.742 93.292c.409 1.38.978 3.538 1.486 4.825-1.216-.373-3.143-.736-4.327-.961 1.028.002 2.44.126 3.347-.034-.018-1.11-.36-2.666-.506-3.83z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.722 96.828c-.006.028-3.604-.772-3.604-.772l3.427 1.704.692-.26-.515-.672z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.979 93.721c.404 1.382.964 3.543 1.467 4.832-1.214-.38-3.141-.753-4.324-.986 1.028.008 2.441.139 3.347-.015-.012-1.109-.348-2.667-.49-3.831h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.311 97.208c-.011.025-3.448-1.665-3.448-1.665l3.092 2.507.741-.069-.385-.773z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M142.801 93.965c.685 1.259 1.686 3.244 2.448 4.391-1.263-.096-3.219-.026-4.421.015 1.003-.225 2.407-.416 3.258-.772-.246-1.082-.902-2.528-1.285-3.634h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.853 97.586c-.007.028-3.583-.99-3.583-.99l3.362 1.904.707-.216-.486-.698z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.171 94.498c.692 1.254 1.705 3.233 2.474 4.373-1.263-.086-3.217.001-4.418.052 1.001-.233 2.403-.437 3.251-.8-.253-1.079-.917-2.521-1.307-3.625z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.308 97.88c-.013.024-3.338-1.997-3.338-1.997l2.917 2.791.75.008-.329-.802h0z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.449 94.813c.802 1.17 1.988 3.027 2.854 4.074-1.249.078-3.159.42-4.334.628.961-.365 2.318-.752 3.116-1.228-.354-1.053-1.146-2.415-1.636-3.474z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.552 98.172c-.001.029-3.604-.085-3.604-.085l3.565 1.054.634-.394-.595-.575zM147.641 80.713c0-.011 2.592-.433 2.592-.433l-2.579.06-.45.231.437.142z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M149.065 81.268c-.752-.227-1.889-.608-2.661-.776.821-.326 2.035-.904 2.782-1.259-.575.36-1.411.822-1.857 1.183.431.292 1.213.59 1.736.852z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.529 80.802c-.003-.011 2.508-.689 2.508-.689l-2.599.331-.392.269.483.089z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M149.185 81.448c-.879-.083-2.227-.251-3.094-.26.653-.579 1.569-1.547 2.134-2.141-.388.558-.984 1.3-1.242 1.828.589.237 1.535.395 2.202.573z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.597 80.979a214.29 214.29 0 012.607-.294l-2.54-.081-.475.209.408.166z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M148.527 81.548c-.799-.153-2.014-.419-2.822-.514.768-.377 1.888-1.026 2.577-1.424-.514.388-1.274.896-1.658 1.275.487.241 1.328.459 1.903.663z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.37 80.953c-.007-.01 2.295-.988 2.295-.988l-2.513.664-.301.306.519.018z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M148.452 81.84c-.665-.275-1.684-.74-2.342-.934.51-.474 1.228-1.305 1.67-1.814-.308.509-.778 1.167-.985 1.673.44.376 1.155.745 1.657 1.075z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.5 81.126c-.005-.015 1.785-.774 1.785-.774l-1.944.267-.239.346.398.161zM145.006 97.842c.001.029-3.7.028-3.7.028l3.746.916.615-.403-.661-.541z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.671 98.083c-.005.027-3.758-.874-3.758-.874l3.608 1.769.707-.228-.557-.667z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.289 98.333c0 .028-3.731-.188-3.731-.188l3.731 1.124.64-.363-.64-.573z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M143.921 95.696c.971 1.07 2.425 2.774 3.443 3.717-1.253.189-3.14.696-4.301 1.005.923-.443 2.244-.943 2.987-1.48-.501-.996-1.489-2.254-2.129-3.242z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.802 98.522c-.007.026-3.729-1.22-3.729-1.22l3.504 2.084.734-.155-.509-.709z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M144.266 95.941c1.058.965 2.653 2.513 3.744 3.344-1.201.346-2.986 1.091-4.084 1.547.852-.562 2.086-1.232 2.754-1.867-.592-.947-1.686-2.1-2.414-3.024z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.109 98.753c.006.029-3.539.696-3.539.696l3.729.254.526-.52-.716-.43z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M146.369 98.531c.004.028-3.691.283-3.691.283l3.808.654.583-.444-.7-.493z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.051 98.725c-.003.027-3.816-.612-3.816-.612l3.735 1.514.689-.275-.608-.627z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M147.686 98.932c.002.028-3.738.07-3.738.07l3.808.863.611-.406-.681-.527z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.125 96.466c1.049.999 2.629 2.598 3.716 3.468-1.237.275-3.082.91-4.218 1.298.887-.505 2.168-1.095 2.87-1.681-.575-.958-1.655-2.143-2.368-3.085z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M148.212 99.084c-.005.026-3.814-.959-3.814-.959l3.654 1.835.721-.205-.561-.671z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M145.487 96.687c1.128.889 2.837 2.322 3.988 3.075-1.172.428-2.898 1.294-3.96 1.824.808-.619 1.99-1.372 2.608-2.051-.662-.904-1.84-1.978-2.636-2.848z'/><path fill='#009B3A' fill-rule='nonzero' stroke='#000' stroke-width='.075' d='M148.536 99.294c.008.028-3.48.938-3.48.938l3.741-.004.486-.554-.747-.38h0z'/><path fill='#FEDF00' fill-rule='nonzero' stroke='#000' stroke-width='.163' d='M153.343 94.058l-2.842-1.964-2.843 1.964 1.066-3.143-2.487-1.965h3.198l1.066-3.143 1.066 3.143h3.198l-2.487 1.965z'/><path fill='#000' fill-rule='nonzero' d='M138.243 99.38l-2.669 1.585-.816-1.374c-.151-.255-.245-.463-.282-.623a.72.72 0 01.05-.47.856.856 0 01.359-.381.865.865 0 01.439-.133.865.865 0 01.416.105c.084.045.177.121.277.226a.978.978 0 01-.029-.273c.004-.043.025-.115.062-.215.038-.1.07-.171.097-.214l.537-.858.553.932-.554.925c-.073.119-.112.209-.117.272a.401.401 0 00.058.239l.043.073 1.083-.643.493.827zm-2.079.115l-.207-.348a1.446 1.446 0 00-.166-.197.254.254 0 00-.163-.084.283.283 0 00-.185.04.287.287 0 00-.15.2c-.013.082.024.198.114.349l.215.362.542-.322zM133.651 97.43l-.811-2.439.629-.209.508 1.527.468-.156-.471-1.416.601-.2.471 1.416.58-.193-.522-1.571.667-.222.826 2.483zM132.586 93.807l-.181-1.584c-.04-.345.013-.613.157-.803.144-.19.368-.303.671-.338.311-.036.565.03.762.197.197.167.317.443.361.827l.06.522 1.144-.131.11.957-3.084.353zm1.205-1.107l-.027-.233c-.021-.184-.068-.309-.14-.376a.308.308 0 00-.258-.083.345.345 0 00-.235.125c-.06.072-.08.197-.059.376l.031.271.688-.08zM132.488 87.982l.103-.952 1.84.198c.183.02.352.067.508.141.156.074.288.179.396.313.108.134.18.271.214.41.049.192.059.419.031.678-.016.15-.045.313-.085.488-.04.175-.098.319-.173.432a1.131 1.131 0 01-.302.299.99.99 0 01-.378.165 1.82 1.82 0 01-.531.032l-1.84-.198.103-.952 1.884.203c.168.018.305-.014.41-.098a.522.522 0 00.184-.373.524.524 0 00-.098-.401c-.083-.103-.21-.164-.382-.183l-1.884-.202zM132.903 85.706l.592-1.695c.099-.282.244-.475.437-.577a.722.722 0 01.599-.045.694.694 0 01.389.318.774.774 0 01.086.384c.124-.193.265-.317.423-.374a.763.763 0 01.517.013.824.824 0 01.56.64c.017.091.009.217-.024.377a4.324 4.324 0 01-.102.419l-.546 1.563-2.931-1.023zm1.468-.512l.138-.394c.049-.141.06-.248.03-.32-.029-.072-.09-.125-.182-.157a.267.267 0 00-.229.013c-.067.038-.125.126-.173.264l-.139.4.555.194zm1.151.402l.161-.461c.055-.156.065-.276.033-.359a.298.298 0 00-.19-.174.274.274 0 00-.242.022c-.075.045-.14.147-.195.305l-.161.46.594.207zM134.372 81.974l.495-.821 2.003 1.209.773-1.281.654.395-1.269 2.103zM136.246 79.133l.615-.738 2.384 1.987-.615.739zM140.417 77.531l.803-.355c.111.215.172.423.183.622.011.199-.026.388-.11.566a1.687 1.687 0 01-.442.539c-.256.22-.497.362-.723.427-.226.065-.479.055-.757-.032-.279-.086-.544-.275-.795-.568-.335-.39-.489-.778-.461-1.165.028-.387.231-.744.609-1.069.297-.255.581-.395.854-.421.273-.026.557.05.853.227l-.519.695a.74.74 0 00-.206-.097.544.544 0 00-.496.125.564.564 0 00-.208.525c.018.156.118.339.299.55.224.261.418.406.58.435a.534.534 0 00.459-.142c.139-.12.211-.249.215-.388a.953.953 0 00-.138-.474zM143.727 76.341l-.964.514.108.523-.865.461-.431-3.288.923-.492 2.489 2.19-.885.472-.375-.38zm-.493-.498l-.827-.823.224 1.145.603-.322zM146.165 72.663l1.404-.243c.277-.048.507-.049.69-.003.183.046.343.129.478.25.135.121.244.271.327.449.082.178.141.371.177.579.057.327.063.587.02.78a1.27 1.27 0 01-.232.506 1.03 1.03 0 01-.383.317 2.251 2.251 0 01-.549.181l-1.404.242-.528-3.058zm1.065.53l.289 1.671.231-.04c.197-.034.334-.08.41-.138a.448.448 0 00.156-.263c.028-.117.021-.299-.021-.543-.056-.324-.147-.537-.273-.638-.127-.101-.312-.131-.557-.088l-.235.039zM150.15 72.129l2.568.11-.028.662-1.608-.069-.021.493 1.491.064-.027.633-1.491-.064-.026.611 1.654.071-.03.702-2.614-.112zM153.888 72.424l.932.228-.556 2.272 1.454.356-.182.742-2.385-.584zM158.867 74.075l1.372.811c.299.177.481.38.546.61.065.23.02.476-.136.739-.159.27-.365.433-.617.489-.252.056-.544-.015-.877-.211l-.452-.267-.586.991-.829-.49 1.579-2.672zm.156 1.629l.202.12c.159.094.287.133.384.115a.31.31 0 00.222-.155.345.345 0 00.042-.263c-.021-.091-.109-.183-.264-.274l-.235-.139-.351.596zM161.713 79.321l-.8-.744-.459.273-.718-.668 2.968-1.478.766.713-1.259 3.067-.735-.684.237-.479zm.309-.628l.509-1.051-1.01.585.501.466zM162.396 80.759l2.559-1.756.904 1.318c.168.244.275.446.322.604a.722.722 0 01-.019.472.851.851 0 01-.333.403.856.856 0 01-.43.161.863.863 0 01-.422-.078 1.187 1.187 0 01-.292-.208.96.96 0 01.047.271.951.951 0 01-.048.219c-.03.103-.058.176-.083.22l-.48.891-.613-.894.492-.959a.74.74 0 00.099-.279.401.401 0 00-.074-.234l-.048-.07-1.039.713-.542-.794zm2.067-.251l.229.333a1.4 1.4 0 00.179.185c.047.045.103.07.168.073a.288.288 0 00.183-.052c.083-.057.128-.126.136-.209.008-.083-.037-.196-.136-.341l-.238-.347-.521.358zM165.425 85.155l-.405-1.015-.532.05-.363-.91 3.315-.067.388.971-2.45 2.234-.372-.932.419-.331zm.549-.435l.909-.732-1.163.097.254.635zM166.78 88.109l.639-.096.219 1.466-1.308.196a3.019 3.019 0 01-.502-.686 2.555 2.555 0 01-.218-.752c-.054-.364-.037-.671.053-.919a1.29 1.29 0 01.475-.617 1.85 1.85 0 01.818-.316c.335-.05.637-.025.905.076s.487.275.655.523c.13.193.221.465.274.817.051.339.058.598.022.775a.994.994 0 01-.223.462c-.112.13-.264.238-.454.323l-.3-.89a.502.502 0 00.237-.231.603.603 0 00.041-.358.628.628 0 00-.291-.465c-.163-.102-.401-.13-.713-.083-.332.05-.56.148-.684.294s-.169.331-.136.555c.016.106.047.205.092.297s.114.194.207.307l.289-.043-.097-.635zM168.809 92.616l-.085.953-1.843-.164a1.534 1.534 0 01-.51-.132 1.108 1.108 0 01-.402-.306 1.063 1.063 0 01-.222-.406 1.947 1.947 0 01-.044-.678c.013-.151.038-.314.075-.49a1.3 1.3 0 01.165-.435 1.12 1.12 0 01.296-.304.988.988 0 01.374-.172c.202-.042.379-.056.531-.042l1.843.164-.085.953-1.887-.168a.541.541 0 00-.408.105.526.526 0 00-.177.376.523.523 0 00.106.399c.085.102.214.161.385.176l1.888.171zM165.378 95.902l.341-1.038-.44-.303.306-.931 2.584 2.078-.327.994-3.313.139.313-.953.536.014zm.701.018l1.167.023-.954-.672-.213.649zM167.19 98.44l-.548.913-1.221-.001.577 1.076-.544.908-.927-1.963-1.115-.668.494-.824 1.115.668z'/><path stroke='#000' stroke-linecap='round' stroke-width='.503' d='M169.411 90.5c.001 10.444-8.465 18.912-18.909 18.913-10.444.001-18.912-8.465-18.913-18.909V90.5c-.001-10.444 8.465-18.912 18.909-18.913 10.444-.001 18.912 8.465 18.913 18.909v.004z'/><path stroke='#000' stroke-linecap='round' stroke-width='.602' d='M164.986 90.5c.001 8-6.484 14.487-14.485 14.488-8 .001-14.486-6.484-14.487-14.485V90.5c-.001-8 6.484-14.486 14.485-14.487 8-.001 14.486 6.484 14.487 14.484v.003z'/></g>"];

exports.cifPy = cifPy;
//# sourceMappingURL=cif-py.js.map
