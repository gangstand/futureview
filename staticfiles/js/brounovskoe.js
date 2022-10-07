var orbitalsBack=[],orbitalsFront=[],orbitalsAmountBG=0,orbitalsAmountFG=15;function setup(){var s=document.getElementById("circles").offsetWidth;createCanvas(s,167).parent("circles");for(var t=0;t<orbitalsAmountBG;t++)orbitalsBack[t]=new OrbitalBG;for(var h=0;h<orbitalsAmountFG;h++)orbitalsFront[h]=new OrbitalFG}function draw(){clear();for(var s=0;s<orbitalsBack.length;s++)orbitalsBack[s].display(),orbitalsBack[s].update(),orbitalsBack[s].edges();for(var t=0;t<orbitalsFront.length;t++)orbitalsFront[t].display(),orbitalsFront[t].update(),orbitalsFront[t].edges()}var speedMin=-10,speedMax=12,colorsBG=["hsl(208, 56%,46%)","hsl(208, 56%,44%)","hsl(208, 56%,42%)","hsl(208, 56%,40%)","hsl(208, 56%,38%)","hsl(208, 56%,36%)","hsl(208, 56%,34%)","hsl(208, 56%,32%)","hsl(208, 56%,30%)","hsl(208, 56%,26%)","hsl(208, 56%,24%)","hsl(208, 56%,46%)","hsl(208, 56%,45%)","hsl(208, 56%,43%)","hsl(208, 56%,41%)","hsl(208, 56%,39%)","hsl(208, 56%,37%)","hsl(208, 56%,35%)","hsl(208, 56%,33%)","hsl(208, 56%,31%)","hsl(208, 56%,27%)","hsl(208, 56%,25%)"],colorsFG=["hsl(207, 100%,100%)","hsl(207, 100%,90%)","hsl(207, 100%,85%)","hsl(207, 100%,80%)","hsl(207, 100%,75%)","hsl(207, 100%,76%)","hsl(207, 100%,74%)","hsl(207, 100%,72%)","hsl(207, 100%,70%)","hsl(207, 100%,68%)","hsl(207, 100%,66%)","hsl(207, 100%,64%)","hsl(207, 100%,62%)","hsl(207, 100%,60%)","hsl(207, 100%,58%)","hsl(207, 100%,57%)","hsl(207, 100%,56%)"];function OrbitalBG(){var s=round(random(120,220)),t=colorsBG[int(random(0,colorsBG.length))];this.pos=createVector(random(120,width-120),random(120,height-120)),this.vel=createVector(random(speedMin,speedMax)/(s/1.75),random(speedMin,speedMax)/(s/1.75));var h=createVector(random(0,width),random(0,height));this.update=function(){this.acc=p5.Vector.sub(h,this.pos),this.acc.setMag(this.radius),this.vel.add(this.acc),this.pos.add(this.vel)},this.display=function(){fill(t),noStroke(),ellipse(this.pos.x,this.pos.y,s,s)},this.edges=function(){s/2+this.pos.x>width&&(this.vel.x*=-1),s/2*-1+this.pos.x<0&&(this.vel.x*=-1),s/2+this.pos.y>height&&(this.vel.y*=-1),s/2*-1+this.pos.y<0&&(this.vel.y*=-1)}}function OrbitalFG(){var s=round(random(4,100)),t=colorsFG[int(random(0,colorsFG.length))];this.pos=createVector(random(98,width-98),random(98,height-98)),this.vel=createVector(random(speedMin,speedMax)/(s/2),random(speedMin,speedMax)/(s/2));var h=createVector(random(0,width),random(0,height));this.update=function(){this.acc=p5.Vector.sub(h,this.pos),this.acc.setMag(this.radius),this.vel.add(this.acc),this.pos.add(this.vel)},this.display=function(){fill(t),noStroke(),ellipse(this.pos.x,this.pos.y,s,s)},this.edges=function(){s/2+this.pos.x>width&&(this.vel.x*=-1),s/2*-1+this.pos.x<0&&(this.vel.x*=-1),s/2+this.pos.y>height&&(this.vel.y*=-1),s/2*-1+this.pos.y<0&&(this.vel.y*=-1)}}