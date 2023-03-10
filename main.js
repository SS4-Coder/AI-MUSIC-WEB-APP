song_1="";
song_2="";
leftWrist_x=0;
leftWrist_y=0;
rightWrist_y=0;
rightWrist_x=0;
function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music.mp3");
    }
    function setup(){
        canvas=createCanvas(600,500);
        canvas.center();
        video=createCapture(VIDEO);
        video.hide();
        poseNet=ml5.poseNet(video,model_loaded);
        poseNet.on("pose",got_poses);
        }
        function draw(){
            image(video,0,0,600,500);
        }
        function model_loaded(){
            console.log("PoseNet is initialized");
            }
            function got_poses(results){
                if(results.length>0){
                console.log(results);
                leftWrist_x=results[0].pose.leftWrist.x;
                leftWrist_y=results[0].pose.leftWrist.y;
                console.log("left Wrist_x "+leftWrist_x+"left Wrist_y "+leftWrist_y);
                rightWrist_x=results[0].pose.rightWrist.x;
                rightWrist_y=results[0].pose.rightWrist.y;
                console.log("Right Wrist_x "+rightWrist_x+"Right Wrist_y "+rightWrist_y);
                }
                }