var hu=Object.defineProperty;var uu=(n,e,t)=>e in n?hu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var pe=(n,e,t)=>uu(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function du(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}function Xn(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Dc={exports:{}},Ls={exports:{}},Ds={exports:{}},uo;function qa(){return uo||(uo=1,function(n){var e=e||{};e.Utils=e.Utils||{},e.Utils.crcTable=null,e.Utils.GUNZIP_MAGIC_COOKIE1=31,e.Utils.GUNZIP_MAGIC_COOKIE2=139,e.Utils.getStringAt=function(t,i,r){var s="",o,a;for(o=i;o<r;o+=1)a=t.getUint8(o),a!==0&&(s+=String.fromCharCode(a));return s},e.Utils.getByteAt=function(t,i){return t.getInt8(i)},e.Utils.getShortAt=function(t,i,r){return t.getInt16(i,r)},e.Utils.getIntAt=function(t,i,r){return t.getInt32(i,r)},e.Utils.getFloatAt=function(t,i,r){return t.getFloat32(i,r)},e.Utils.getDoubleAt=function(t,i,r){return t.getFloat64(i,r)},e.Utils.getLongAt=function(t,i,r){var s,o=[],a=0;for(s=0;s<8;s+=1)o[s]=e.Utils.getByteAt(t,i+s,r);for(s=o.length-1;s>=0;s--)a=a*256+o[s];return a},e.Utils.toArrayBuffer=function(t){var i,r,s;for(i=new ArrayBuffer(t.length),r=new Uint8Array(i),s=0;s<t.length;s+=1)r[s]=t[s];return i},e.Utils.isString=function(t){return typeof t=="string"||t instanceof String},e.Utils.formatNumber=function(t,i){var r=0;return e.Utils.isString(t)?r=Number(t):r=t,i?r=r.toPrecision(5):r=r.toPrecision(7),parseFloat(r)},e.Utils.makeCRCTable=function(){for(var t,i=[],r=0;r<256;r++){t=r;for(var s=0;s<8;s++)t=t&1?3988292384^t>>>1:t>>>1;i[r]=t}return i},e.Utils.crc32=function(t){for(var i=e.Utils.crcTable||(e.Utils.crcTable=e.Utils.makeCRCTable()),r=-1,s=0;s<t.byteLength;s++)r=r>>>8^i[(r^t.getUint8(s))&255];return(r^-1)>>>0},n.exports&&(n.exports=e.Utils)}(Ds)),Ds.exports}var fo;function Pc(){return fo||(fo=1,function(n){var e=e||{};e.Utils=e.Utils||(typeof Xn<"u"?qa():null),e.NIFTI1=e.NIFTI1||function(){this.littleEndian=!1,this.dim_info=0,this.dims=[],this.intent_p1=0,this.intent_p2=0,this.intent_p3=0,this.intent_code=0,this.datatypeCode=0,this.numBitsPerVoxel=0,this.slice_start=0,this.slice_end=0,this.slice_code=0,this.pixDims=[],this.vox_offset=0,this.scl_slope=1,this.scl_inter=0,this.xyzt_units=0,this.cal_max=0,this.cal_min=0,this.slice_duration=0,this.toffset=0,this.description="",this.aux_file="",this.intent_name="",this.qform_code=0,this.sform_code=0,this.quatern_b=0,this.quatern_c=0,this.quatern_d=0,this.qoffset_x=0,this.qoffset_y=0,this.qoffset_z=0,this.affine=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],this.magic=0,this.isHDR=!1,this.extensionFlag=[0,0,0,0],this.extensionSize=0,this.extensionCode=0},e.NIFTI1.TYPE_NONE=0,e.NIFTI1.TYPE_BINARY=1,e.NIFTI1.TYPE_UINT8=2,e.NIFTI1.TYPE_INT16=4,e.NIFTI1.TYPE_INT32=8,e.NIFTI1.TYPE_FLOAT32=16,e.NIFTI1.TYPE_COMPLEX64=32,e.NIFTI1.TYPE_FLOAT64=64,e.NIFTI1.TYPE_RGB24=128,e.NIFTI1.TYPE_INT8=256,e.NIFTI1.TYPE_UINT16=512,e.NIFTI1.TYPE_UINT32=768,e.NIFTI1.TYPE_INT64=1024,e.NIFTI1.TYPE_UINT64=1280,e.NIFTI1.TYPE_FLOAT128=1536,e.NIFTI1.TYPE_COMPLEX128=1792,e.NIFTI1.TYPE_COMPLEX256=2048,e.NIFTI1.XFORM_UNKNOWN=0,e.NIFTI1.XFORM_SCANNER_ANAT=1,e.NIFTI1.XFORM_ALIGNED_ANAT=2,e.NIFTI1.XFORM_TALAIRACH=3,e.NIFTI1.XFORM_MNI_152=4,e.NIFTI1.SPATIAL_UNITS_MASK=7,e.NIFTI1.TEMPORAL_UNITS_MASK=56,e.NIFTI1.UNITS_UNKNOWN=0,e.NIFTI1.UNITS_METER=1,e.NIFTI1.UNITS_MM=2,e.NIFTI1.UNITS_MICRON=3,e.NIFTI1.UNITS_SEC=8,e.NIFTI1.UNITS_MSEC=16,e.NIFTI1.UNITS_USEC=24,e.NIFTI1.UNITS_HZ=32,e.NIFTI1.UNITS_PPM=40,e.NIFTI1.UNITS_RADS=48,e.NIFTI1.MAGIC_COOKIE=348,e.NIFTI1.STANDARD_HEADER_SIZE=348,e.NIFTI1.MAGIC_NUMBER_LOCATION=344,e.NIFTI1.MAGIC_NUMBER=[110,43,49],e.NIFTI1.MAGIC_NUMBER2=[110,105,49],e.NIFTI1.EXTENSION_HEADER_SIZE=8,e.NIFTI1.prototype.readHeader=function(t){var i=new DataView(t),r=e.Utils.getIntAt(i,0,this.littleEndian),s,o,a,c;if(r!==e.NIFTI1.MAGIC_COOKIE&&(this.littleEndian=!0,r=e.Utils.getIntAt(i,0,this.littleEndian)),r!==e.NIFTI1.MAGIC_COOKIE)throw new Error("This does not appear to be a NIFTI file!");for(this.dim_info=e.Utils.getByteAt(i,39),s=0;s<8;s+=1)c=40+s*2,this.dims[s]=e.Utils.getShortAt(i,c,this.littleEndian);for(this.intent_p1=e.Utils.getFloatAt(i,56,this.littleEndian),this.intent_p2=e.Utils.getFloatAt(i,60,this.littleEndian),this.intent_p3=e.Utils.getFloatAt(i,64,this.littleEndian),this.intent_code=e.Utils.getShortAt(i,68,this.littleEndian),this.datatypeCode=e.Utils.getShortAt(i,70,this.littleEndian),this.numBitsPerVoxel=e.Utils.getShortAt(i,72,this.littleEndian),this.slice_start=e.Utils.getShortAt(i,74,this.littleEndian),s=0;s<8;s+=1)c=76+s*4,this.pixDims[s]=e.Utils.getFloatAt(i,c,this.littleEndian);for(this.vox_offset=e.Utils.getFloatAt(i,108,this.littleEndian),this.scl_slope=e.Utils.getFloatAt(i,112,this.littleEndian),this.scl_inter=e.Utils.getFloatAt(i,116,this.littleEndian),this.slice_end=e.Utils.getShortAt(i,120,this.littleEndian),this.slice_code=e.Utils.getByteAt(i,122),this.xyzt_units=e.Utils.getByteAt(i,123),this.cal_max=e.Utils.getFloatAt(i,124,this.littleEndian),this.cal_min=e.Utils.getFloatAt(i,128,this.littleEndian),this.slice_duration=e.Utils.getFloatAt(i,132,this.littleEndian),this.toffset=e.Utils.getFloatAt(i,136,this.littleEndian),this.description=e.Utils.getStringAt(i,148,228),this.aux_file=e.Utils.getStringAt(i,228,252),this.qform_code=e.Utils.getShortAt(i,252,this.littleEndian),this.sform_code=e.Utils.getShortAt(i,254,this.littleEndian),this.quatern_b=e.Utils.getFloatAt(i,256,this.littleEndian),this.quatern_c=e.Utils.getFloatAt(i,260,this.littleEndian),this.quatern_d=e.Utils.getFloatAt(i,264,this.littleEndian),this.qoffset_x=e.Utils.getFloatAt(i,268,this.littleEndian),this.qoffset_y=e.Utils.getFloatAt(i,272,this.littleEndian),this.qoffset_z=e.Utils.getFloatAt(i,276,this.littleEndian),o=0;o<3;o+=1)for(a=0;a<4;a+=1)c=280+(o*4+a)*4,this.affine[o][a]=e.Utils.getFloatAt(i,c,this.littleEndian);this.affine[3][0]=0,this.affine[3][1]=0,this.affine[3][2]=0,this.affine[3][3]=1,this.intent_name=e.Utils.getStringAt(i,328,344),this.magic=e.Utils.getStringAt(i,344,348),this.isHDR=this.magic===e.NIFTI1.MAGIC_NUMBER2,i.byteLength>e.NIFTI1.MAGIC_COOKIE&&(this.extensionFlag[0]=e.Utils.getByteAt(i,348),this.extensionFlag[1]=e.Utils.getByteAt(i,349),this.extensionFlag[2]=e.Utils.getByteAt(i,350),this.extensionFlag[3]=e.Utils.getByteAt(i,351),this.extensionFlag[0]&&(this.extensionSize=this.getExtensionSize(i),this.extensionCode=this.getExtensionCode(i)))},e.NIFTI1.prototype.toFormattedString=function(){var t=e.Utils.formatNumber,i="";return i+="Dim Info = "+this.dim_info+`
`,i+="Image Dimensions (1-8): "+this.dims[0]+", "+this.dims[1]+", "+this.dims[2]+", "+this.dims[3]+", "+this.dims[4]+", "+this.dims[5]+", "+this.dims[6]+", "+this.dims[7]+`
`,i+="Intent Parameters (1-3): "+this.intent_p1+", "+this.intent_p2+", "+this.intent_p3+`
`,i+="Intent Code = "+this.intent_code+`
`,i+="Datatype = "+this.datatypeCode+" ("+this.getDatatypeCodeString(this.datatypeCode)+`)
`,i+="Bits Per Voxel = "+this.numBitsPerVoxel+`
`,i+="Slice Start = "+this.slice_start+`
`,i+="Voxel Dimensions (1-8): "+t(this.pixDims[0])+", "+t(this.pixDims[1])+", "+t(this.pixDims[2])+", "+t(this.pixDims[3])+", "+t(this.pixDims[4])+", "+t(this.pixDims[5])+", "+t(this.pixDims[6])+", "+t(this.pixDims[7])+`
`,i+="Image Offset = "+this.vox_offset+`
`,i+="Data Scale:  Slope = "+t(this.scl_slope)+"  Intercept = "+t(this.scl_inter)+`
`,i+="Slice End = "+this.slice_end+`
`,i+="Slice Code = "+this.slice_code+`
`,i+="Units Code = "+this.xyzt_units+" ("+this.getUnitsCodeString(e.NIFTI1.SPATIAL_UNITS_MASK&this.xyzt_units)+", "+this.getUnitsCodeString(e.NIFTI1.TEMPORAL_UNITS_MASK&this.xyzt_units)+`)
`,i+="Display Range:  Max = "+t(this.cal_max)+"  Min = "+t(this.cal_min)+`
`,i+="Slice Duration = "+this.slice_duration+`
`,i+="Time Axis Shift = "+this.toffset+`
`,i+='Description: "'+this.description+`"
`,i+='Auxiliary File: "'+this.aux_file+`"
`,i+="Q-Form Code = "+this.qform_code+" ("+this.getTransformCodeString(this.qform_code)+`)
`,i+="S-Form Code = "+this.sform_code+" ("+this.getTransformCodeString(this.sform_code)+`)
`,i+="Quaternion Parameters:  b = "+t(this.quatern_b)+"  c = "+t(this.quatern_c)+"  d = "+t(this.quatern_d)+`
`,i+="Quaternion Offsets:  x = "+this.qoffset_x+"  y = "+this.qoffset_y+"  z = "+this.qoffset_z+`
`,i+="S-Form Parameters X: "+t(this.affine[0][0])+", "+t(this.affine[0][1])+", "+t(this.affine[0][2])+", "+t(this.affine[0][3])+`
`,i+="S-Form Parameters Y: "+t(this.affine[1][0])+", "+t(this.affine[1][1])+", "+t(this.affine[1][2])+", "+t(this.affine[1][3])+`
`,i+="S-Form Parameters Z: "+t(this.affine[2][0])+", "+t(this.affine[2][1])+", "+t(this.affine[2][2])+", "+t(this.affine[2][3])+`
`,i+='Intent Name: "'+this.intent_name+`"
`,this.extensionFlag[0]&&(i+="Extension: Size = "+this.extensionSize+"  Code = "+this.extensionCode+`
`),i},e.NIFTI1.prototype.getDatatypeCodeString=function(t){return t===e.NIFTI1.TYPE_UINT8?"1-Byte Unsigned Integer":t===e.NIFTI1.TYPE_INT16?"2-Byte Signed Integer":t===e.NIFTI1.TYPE_INT32?"4-Byte Signed Integer":t===e.NIFTI1.TYPE_FLOAT32?"4-Byte Float":t===e.NIFTI1.TYPE_FLOAT64?"8-Byte Float":t===e.NIFTI1.TYPE_RGB24?"RGB":t===e.NIFTI1.TYPE_INT8?"1-Byte Signed Integer":t===e.NIFTI1.TYPE_UINT16?"2-Byte Unsigned Integer":t===e.NIFTI1.TYPE_UINT32?"4-Byte Unsigned Integer":t===e.NIFTI1.TYPE_INT64?"8-Byte Signed Integer":t===e.NIFTI1.TYPE_UINT64?"8-Byte Unsigned Integer":"Unknown"},e.NIFTI1.prototype.getTransformCodeString=function(t){return t===e.NIFTI1.XFORM_SCANNER_ANAT?"Scanner":t===e.NIFTI1.XFORM_ALIGNED_ANAT?"Aligned":t===e.NIFTI1.XFORM_TALAIRACH?"Talairach":t===e.NIFTI1.XFORM_MNI_152?"MNI":"Unknown"},e.NIFTI1.prototype.getUnitsCodeString=function(t){return t===e.NIFTI1.UNITS_METER?"Meters":t===e.NIFTI1.UNITS_MM?"Millimeters":t===e.NIFTI1.UNITS_MICRON?"Microns":t===e.NIFTI1.UNITS_SEC?"Seconds":t===e.NIFTI1.UNITS_MSEC?"Milliseconds":t===e.NIFTI1.UNITS_USEC?"Microseconds":t===e.NIFTI1.UNITS_HZ?"Hz":t===e.NIFTI1.UNITS_PPM?"PPM":t===e.NIFTI1.UNITS_RADS?"Rads":"Unknown"},e.NIFTI1.prototype.getQformMat=function(){return this.convertNiftiQFormToNiftiSForm(this.quatern_b,this.quatern_c,this.quatern_d,this.qoffset_x,this.qoffset_y,this.qoffset_z,this.pixDims[1],this.pixDims[2],this.pixDims[3],this.pixDims[0])},e.NIFTI1.prototype.convertNiftiQFormToNiftiSForm=function(t,i,r,s,o,a,c,l,h,d){var u=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],p,_=t,g=i,m=r,f,b,x;return u[3][0]=u[3][1]=u[3][2]=0,u[3][3]=1,p=1-(_*_+g*g+m*m),p<1e-7?(p=1/Math.sqrt(_*_+g*g+m*m),_*=p,g*=p,m*=p,p=0):p=Math.sqrt(p),f=c>0?c:1,b=l>0?l:1,x=h>0?h:1,d<0&&(x=-x),u[0][0]=(p*p+_*_-g*g-m*m)*f,u[0][1]=2*(_*g-p*m)*b,u[0][2]=2*(_*m+p*g)*x,u[1][0]=2*(_*g+p*m)*f,u[1][1]=(p*p+g*g-_*_-m*m)*b,u[1][2]=2*(g*m-p*_)*x,u[2][0]=2*(_*m-p*g)*f,u[2][1]=2*(g*m+p*_)*b,u[2][2]=(p*p+m*m-g*g-_*_)*x,u[0][3]=s,u[1][3]=o,u[2][3]=a,u},e.NIFTI1.prototype.convertNiftiSFormToNEMA=function(t){var i,r,s,o,a,c,l,h,d,u,p,_,g,m,f,b,x,M,I,R,A,k,S,y,P,W,$,L,N,V,Y,X,q,Z;if(f=0,$=[[0,0,0],[0,0,0],[0,0,0]],L=[[0,0,0],[0,0,0],[0,0,0]],i=t[0][0],r=t[0][1],s=t[0][2],o=t[1][0],a=t[1][1],c=t[1][2],l=t[2][0],h=t[2][1],d=t[2][2],u=Math.sqrt(i*i+o*o+l*l),u===0||(i/=u,o/=u,l/=u,u=Math.sqrt(r*r+a*a+h*h),u===0))return null;if(r/=u,a/=u,h/=u,u=i*r+o*a+l*h,Math.abs(u)>1e-4){if(r-=u*i,a-=u*o,h-=u*l,u=Math.sqrt(r*r+a*a+h*h),u===0)return null;r/=u,a/=u,h/=u}if(u=Math.sqrt(s*s+c*c+d*d),u===0?(s=o*h-l*a,c=l*r-h*i,d=i*a-o*r):(s/=u,c/=u,d/=u),u=i*s+o*c+l*d,Math.abs(u)>1e-4){if(s-=u*i,c-=u*o,d-=u*l,u=Math.sqrt(s*s+c*c+d*d),u===0)return null;s/=u,c/=u,d/=u}if(u=r*s+a*c+h*d,Math.abs(u)>1e-4){if(s-=u*r,c-=u*a,d-=u*h,u=Math.sqrt(s*s+c*c+d*d),u===0)return null;s/=u,c/=u,d/=u}if($[0][0]=i,$[0][1]=r,$[0][2]=s,$[1][0]=o,$[1][1]=a,$[1][2]=c,$[2][0]=l,$[2][1]=h,$[2][2]=d,p=this.nifti_mat33_determ($),p===0)return null;for(W=-666,I=k=S=y=1,R=2,A=3,g=1;g<=3;g+=1)for(m=1;m<=3;m+=1)if(g!==m){for(f=1;f<=3;f+=1)if(!(g===f||m===f))for(L[0][0]=L[0][1]=L[0][2]=L[1][0]=L[1][1]=L[1][2]=L[2][0]=L[2][1]=L[2][2]=0,b=-1;b<=1;b+=2)for(x=-1;x<=1;x+=2)for(M=-1;M<=1;M+=2)L[0][g-1]=b,L[1][m-1]=x,L[2][f-1]=M,_=this.nifti_mat33_determ(L),_*p>0&&(P=this.nifti_mat33_mul(L,$),u=P[0][0]+P[1][1]+P[2][2],u>W&&(W=u,I=g,R=m,A=f,k=b,S=x,y=M))}switch(N=V=Y=X=q=Z=0,I*k){case 1:N="X",X="+";break;case-1:N="X",X="-";break;case 2:N="Y",X="+";break;case-2:N="Y",X="-";break;case 3:N="Z",X="+";break;case-3:N="Z",X="-";break}switch(R*S){case 1:V="X",q="+";break;case-1:V="X",q="-";break;case 2:V="Y",q="+";break;case-2:V="Y",q="-";break;case 3:V="Z",q="+";break;case-3:V="Z",q="-";break}switch(A*y){case 1:Y="X",Z="+";break;case-1:Y="X",Z="-";break;case 2:Y="Y",Z="+";break;case-2:Y="Y",Z="-";break;case 3:Y="Z",Z="+";break;case-3:Y="Z",Z="-";break}return N+V+Y+X+q+Z},e.NIFTI1.prototype.nifti_mat33_mul=function(t,i){var r=[[0,0,0],[0,0,0],[0,0,0]],s,o;for(s=0;s<3;s+=1)for(o=0;o<3;o+=1)r[s][o]=t[s][0]*i[0][o]+t[s][1]*i[1][o]+t[s][2]*i[2][o];return r},e.NIFTI1.prototype.nifti_mat33_determ=function(t){var i,r,s,o,a,c,l,h,d;return i=t[0][0],r=t[0][1],s=t[0][2],o=t[1][0],a=t[1][1],c=t[1][2],l=t[2][0],h=t[2][1],d=t[2][2],i*a*d-i*h*c-o*r*d+o*h*s+l*r*c-l*a*s},e.NIFTI1.prototype.getExtensionLocation=function(){return e.NIFTI1.MAGIC_COOKIE+4},e.NIFTI1.prototype.getExtensionSize=function(t){return e.Utils.getIntAt(t,this.getExtensionLocation(),this.littleEndian)},e.NIFTI1.prototype.getExtensionCode=function(t){return e.Utils.getIntAt(t,this.getExtensionLocation()+4,this.littleEndian)},n.exports&&(n.exports=e.NIFTI1)}(Ls)),Ls.exports}var Ps={exports:{}},po;function fu(){return po||(po=1,function(n){var e=e||{};e.Utils=e.Utils||(typeof Xn<"u"?qa():null),e.NIFTI1=e.NIFTI1||(typeof Xn<"u"?Pc():null),e.NIFTI2=e.NIFTI2||function(){this.littleEndian=!1,this.dim_info=0,this.dims=[],this.intent_p1=0,this.intent_p2=0,this.intent_p3=0,this.intent_code=0,this.datatypeCode=0,this.numBitsPerVoxel=0,this.slice_start=0,this.slice_end=0,this.slice_code=0,this.pixDims=[],this.vox_offset=0,this.scl_slope=1,this.scl_inter=0,this.xyzt_units=0,this.cal_max=0,this.cal_min=0,this.slice_duration=0,this.toffset=0,this.description="",this.aux_file="",this.intent_name="",this.qform_code=0,this.sform_code=0,this.quatern_b=0,this.quatern_c=0,this.quatern_d=0,this.qoffset_x=0,this.qoffset_y=0,this.qoffset_z=0,this.affine=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],this.magic=0,this.extensionFlag=[0,0,0,0]},e.NIFTI2.MAGIC_COOKIE=540,e.NIFTI2.MAGIC_NUMBER_LOCATION=4,e.NIFTI2.MAGIC_NUMBER=[110,43,50,0,13,10,26,10],e.NIFTI2.prototype.readHeader=function(t){var i=new DataView(t),r=e.Utils.getIntAt(i,0,this.littleEndian),s,o,a,c;if(r!==e.NIFTI2.MAGIC_COOKIE&&(this.littleEndian=!0,r=e.Utils.getIntAt(i,0,this.littleEndian)),r!==e.NIFTI2.MAGIC_COOKIE)throw new Error("This does not appear to be a NIFTI file!");for(this.datatypeCode=e.Utils.getShortAt(i,12,this.littleEndian),this.numBitsPerVoxel=e.Utils.getShortAt(i,14,this.littleEndian),s=0;s<8;s+=1)c=16+s*8,this.dims[s]=e.Utils.getLongAt(i,c,this.littleEndian);for(this.intent_p1=e.Utils.getDoubleAt(i,80,this.littleEndian),this.intent_p2=e.Utils.getDoubleAt(i,88,this.littleEndian),this.intent_p3=e.Utils.getDoubleAt(i,96,this.littleEndian),s=0;s<8;s+=1)c=104+s*8,this.pixDims[s]=e.Utils.getDoubleAt(i,c,this.littleEndian);for(this.vox_offset=e.Utils.getLongAt(i,168,this.littleEndian),this.scl_slope=e.Utils.getDoubleAt(i,176,this.littleEndian),this.scl_inter=e.Utils.getDoubleAt(i,184,this.littleEndian),this.cal_max=e.Utils.getDoubleAt(i,192,this.littleEndian),this.cal_min=e.Utils.getDoubleAt(i,200,this.littleEndian),this.slice_duration=e.Utils.getDoubleAt(i,208,this.littleEndian),this.toffset=e.Utils.getDoubleAt(i,216,this.littleEndian),this.slice_start=e.Utils.getLongAt(i,224,this.littleEndian),this.slice_end=e.Utils.getLongAt(i,232,this.littleEndian),this.description=e.Utils.getStringAt(i,240,320),this.aux_file=e.Utils.getStringAt(i,320,344),this.qform_code=e.Utils.getIntAt(i,344,this.littleEndian),this.sform_code=e.Utils.getIntAt(i,348,this.littleEndian),this.quatern_b=e.Utils.getDoubleAt(i,352,this.littleEndian),this.quatern_c=e.Utils.getDoubleAt(i,360,this.littleEndian),this.quatern_d=e.Utils.getDoubleAt(i,368,this.littleEndian),this.qoffset_x=e.Utils.getDoubleAt(i,376,this.littleEndian),this.qoffset_y=e.Utils.getDoubleAt(i,384,this.littleEndian),this.qoffset_z=e.Utils.getDoubleAt(i,392,this.littleEndian),o=0;o<3;o+=1)for(a=0;a<4;a+=1)c=400+(o*4+a)*8,this.affine[o][a]=e.Utils.getDoubleAt(i,c,this.littleEndian);this.affine[3][0]=0,this.affine[3][1]=0,this.affine[3][2]=0,this.affine[3][3]=1,this.slice_code=e.Utils.getIntAt(i,496,this.littleEndian),this.xyzt_units=e.Utils.getIntAt(i,500,this.littleEndian),this.intent_code=e.Utils.getIntAt(i,504,this.littleEndian),this.intent_name=e.Utils.getStringAt(i,508,524),this.dim_info=e.Utils.getByteAt(i,524),i.byteLength>e.NIFTI2.MAGIC_COOKIE&&(this.extensionFlag[0]=e.Utils.getByteAt(i,540),this.extensionFlag[1]=e.Utils.getByteAt(i,541),this.extensionFlag[2]=e.Utils.getByteAt(i,542),this.extensionFlag[3]=e.Utils.getByteAt(i,543),this.extensionFlag[0]&&(this.extensionSize=this.getExtensionSize(i),this.extensionCode=this.getExtensionCode(i)))},e.NIFTI2.prototype.toFormattedString=function(){var t=e.Utils.formatNumber,i="";return i+="Datatype = "+ +this.datatypeCode+" ("+this.getDatatypeCodeString(this.datatypeCode)+`)
`,i+="Bits Per Voxel =  = "+this.numBitsPerVoxel+`
`,i+="Image Dimensions (1-8): "+this.dims[0]+", "+this.dims[1]+", "+this.dims[2]+", "+this.dims[3]+", "+this.dims[4]+", "+this.dims[5]+", "+this.dims[6]+", "+this.dims[7]+`
`,i+="Intent Parameters (1-3): "+this.intent_p1+", "+this.intent_p2+", "+this.intent_p3+`
`,i+="Voxel Dimensions (1-8): "+t(this.pixDims[0])+", "+t(this.pixDims[1])+", "+t(this.pixDims[2])+", "+t(this.pixDims[3])+", "+t(this.pixDims[4])+", "+t(this.pixDims[5])+", "+t(this.pixDims[6])+", "+t(this.pixDims[7])+`
`,i+="Image Offset = "+this.vox_offset+`
`,i+="Data Scale:  Slope = "+t(this.scl_slope)+"  Intercept = "+t(this.scl_inter)+`
`,i+="Display Range:  Max = "+t(this.cal_max)+"  Min = "+t(this.cal_min)+`
`,i+="Slice Duration = "+this.slice_duration+`
`,i+="Time Axis Shift = "+this.toffset+`
`,i+="Slice Start = "+this.slice_start+`
`,i+="Slice End = "+this.slice_end+`
`,i+='Description: "'+this.description+`"
`,i+='Auxiliary File: "'+this.aux_file+`"
`,i+="Q-Form Code = "+this.qform_code+" ("+this.getTransformCodeString(this.qform_code)+`)
`,i+="S-Form Code = "+this.sform_code+" ("+this.getTransformCodeString(this.sform_code)+`)
`,i+="Quaternion Parameters:  b = "+t(this.quatern_b)+"  c = "+t(this.quatern_c)+"  d = "+t(this.quatern_d)+`
`,i+="Quaternion Offsets:  x = "+this.qoffset_x+"  y = "+this.qoffset_y+"  z = "+this.qoffset_z+`
`,i+="S-Form Parameters X: "+t(this.affine[0][0])+", "+t(this.affine[0][1])+", "+t(this.affine[0][2])+", "+t(this.affine[0][3])+`
`,i+="S-Form Parameters Y: "+t(this.affine[1][0])+", "+t(this.affine[1][1])+", "+t(this.affine[1][2])+", "+t(this.affine[1][3])+`
`,i+="S-Form Parameters Z: "+t(this.affine[2][0])+", "+t(this.affine[2][1])+", "+t(this.affine[2][2])+", "+t(this.affine[2][3])+`
`,i+="Slice Code = "+this.slice_code+`
`,i+="Units Code = "+this.xyzt_units+" ("+this.getUnitsCodeString(e.NIFTI1.SPATIAL_UNITS_MASK&this.xyzt_units)+", "+this.getUnitsCodeString(e.NIFTI1.TEMPORAL_UNITS_MASK&this.xyzt_units)+`)
`,i+="Intent Code = "+this.intent_code+`
`,i+='Intent Name: "'+this.intent_name+`"
`,i+="Dim Info = "+this.dim_info+`
`,i},e.NIFTI2.prototype.getExtensionLocation=function(){return e.NIFTI2.MAGIC_COOKIE+4},e.NIFTI2.prototype.getExtensionSize=e.NIFTI1.prototype.getExtensionSize,e.NIFTI2.prototype.getExtensionCode=e.NIFTI1.prototype.getExtensionCode,e.NIFTI2.prototype.getDatatypeCodeString=e.NIFTI1.prototype.getDatatypeCodeString,e.NIFTI2.prototype.getTransformCodeString=e.NIFTI1.prototype.getTransformCodeString,e.NIFTI2.prototype.getUnitsCodeString=e.NIFTI1.prototype.getUnitsCodeString,e.NIFTI2.prototype.getQformMat=e.NIFTI1.prototype.getQformMat,e.NIFTI2.prototype.convertNiftiQFormToNiftiSForm=e.NIFTI1.prototype.convertNiftiQFormToNiftiSForm,e.NIFTI2.prototype.convertNiftiSFormToNEMA=e.NIFTI1.prototype.convertNiftiSFormToNEMA,e.NIFTI2.prototype.nifti_mat33_mul=e.NIFTI1.prototype.nifti_mat33_mul,e.NIFTI2.prototype.nifti_mat33_determ=e.NIFTI1.prototype.nifti_mat33_determ,n.exports&&(n.exports=e.NIFTI2)}(Ps)),Ps.exports}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const pu=4,mo=0,_o=1,mu=2;function Bi(n){let e=n.length;for(;--e>=0;)n[e]=0}const _u=0,Uc=1,gu=2,xu=3,vu=258,Ya=29,mr=256,ir=mr+1+Ya,Ii=30,Za=19,Nc=2*ir+1,qn=15,Us=16,Su=7,$a=256,Fc=16,Oc=17,zc=18,wa=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),rs=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Mu=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Bc=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Eu=512,fn=new Array((ir+2)*2);Bi(fn);const Ji=new Array(Ii*2);Bi(Ji);const rr=new Array(Eu);Bi(rr);const sr=new Array(vu-xu+1);Bi(sr);const Ka=new Array(Ya);Bi(Ka);const as=new Array(Ii);Bi(as);function Ns(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let kc,Hc,Vc;function Fs(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Gc=n=>n<256?rr[n]:rr[256+(n>>>7)],ar=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},Lt=(n,e,t)=>{n.bi_valid>Us-t?(n.bi_buf|=e<<n.bi_valid&65535,ar(n,n.bi_buf),n.bi_buf=e>>Us-n.bi_valid,n.bi_valid+=t-Us):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Qt=(n,e,t)=>{Lt(n,t[e*2],t[e*2+1])},Wc=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},yu=n=>{n.bi_valid===16?(ar(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},bu=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,o=e.stat_desc.extra_bits,a=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,h,d,u,p,_,g=0;for(u=0;u<=qn;u++)n.bl_count[u]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<Nc;l++)h=n.heap[l],u=t[t[h*2+1]*2+1]+1,u>c&&(u=c,g++),t[h*2+1]=u,!(h>i)&&(n.bl_count[u]++,p=0,h>=a&&(p=o[h-a]),_=t[h*2],n.opt_len+=_*(u+p),s&&(n.static_len+=_*(r[h*2+1]+p)));if(g!==0){do{for(u=c-1;n.bl_count[u]===0;)u--;n.bl_count[u]--,n.bl_count[u+1]+=2,n.bl_count[c]--,g-=2}while(g>0);for(u=c;u!==0;u--)for(h=n.bl_count[u];h!==0;)d=n.heap[--l],!(d>i)&&(t[d*2+1]!==u&&(n.opt_len+=(u-t[d*2+1])*t[d*2],t[d*2+1]=u),h--)}},Xc=(n,e,t)=>{const i=new Array(qn+1);let r=0,s,o;for(s=1;s<=qn;s++)r=r+t[s-1]<<1,i[s]=r;for(o=0;o<=e;o++){let a=n[o*2+1];a!==0&&(n[o*2]=Wc(i[a]++,a))}},Tu=()=>{let n,e,t,i,r;const s=new Array(qn+1);for(t=0,i=0;i<Ya-1;i++)for(Ka[i]=t,n=0;n<1<<wa[i];n++)sr[t++]=i;for(sr[t-1]=i,r=0,i=0;i<16;i++)for(as[i]=r,n=0;n<1<<rs[i];n++)rr[r++]=i;for(r>>=7;i<Ii;i++)for(as[i]=r<<7,n=0;n<1<<rs[i]-7;n++)rr[256+r++]=i;for(e=0;e<=qn;e++)s[e]=0;for(n=0;n<=143;)fn[n*2+1]=8,n++,s[8]++;for(;n<=255;)fn[n*2+1]=9,n++,s[9]++;for(;n<=279;)fn[n*2+1]=7,n++,s[7]++;for(;n<=287;)fn[n*2+1]=8,n++,s[8]++;for(Xc(fn,ir+1,s),n=0;n<Ii;n++)Ji[n*2+1]=5,Ji[n*2]=Wc(n,5);kc=new Ns(fn,wa,mr+1,ir,qn),Hc=new Ns(Ji,rs,0,Ii,qn),Vc=new Ns(new Array(0),Mu,0,Za,Su)},qc=n=>{let e;for(e=0;e<ir;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Ii;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Za;e++)n.bl_tree[e*2]=0;n.dyn_ltree[$a*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Yc=n=>{n.bi_valid>8?ar(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},go=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},Os=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&go(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!go(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},xo=(n,e,t)=>{let i,r,s=0,o,a;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Qt(n,r,e):(o=sr[r],Qt(n,o+mr+1,e),a=wa[o],a!==0&&(r-=Ka[o],Lt(n,r,a)),i--,o=Gc(i),Qt(n,o,t),a=rs[o],a!==0&&(i-=as[o],Lt(n,i,a)));while(s<n.sym_next);Qt(n,$a,e)},Ra=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let o,a,c=-1,l;for(n.heap_len=0,n.heap_max=Nc,o=0;o<s;o++)t[o*2]!==0?(n.heap[++n.heap_len]=c=o,n.depth[o]=0):t[o*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,o=n.heap_len>>1;o>=1;o--)Os(n,t,o);l=s;do o=n.heap[1],n.heap[1]=n.heap[n.heap_len--],Os(n,t,1),a=n.heap[1],n.heap[--n.heap_max]=o,n.heap[--n.heap_max]=a,t[l*2]=t[o*2]+t[a*2],n.depth[l]=(n.depth[o]>=n.depth[a]?n.depth[o]:n.depth[a])+1,t[o*2+1]=t[a*2+1]=l,n.heap[1]=l++,Os(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],bu(n,e),Xc(t,c,n.bl_count)},vo=(n,e,t)=>{let i,r=-1,s,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=o,o=e[(i+1)*2+1],!(++a<c&&s===o)&&(a<l?n.bl_tree[s*2]+=a:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Fc*2]++):a<=10?n.bl_tree[Oc*2]++:n.bl_tree[zc*2]++,a=0,r=s,o===0?(c=138,l=3):s===o?(c=6,l=3):(c=7,l=4))},So=(n,e,t)=>{let i,r=-1,s,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),i=0;i<=t;i++)if(s=o,o=e[(i+1)*2+1],!(++a<c&&s===o)){if(a<l)do Qt(n,s,n.bl_tree);while(--a!==0);else s!==0?(s!==r&&(Qt(n,s,n.bl_tree),a--),Qt(n,Fc,n.bl_tree),Lt(n,a-3,2)):a<=10?(Qt(n,Oc,n.bl_tree),Lt(n,a-3,3)):(Qt(n,zc,n.bl_tree),Lt(n,a-11,7));a=0,r=s,o===0?(c=138,l=3):s===o?(c=6,l=3):(c=7,l=4)}},Au=n=>{let e;for(vo(n,n.dyn_ltree,n.l_desc.max_code),vo(n,n.dyn_dtree,n.d_desc.max_code),Ra(n,n.bl_desc),e=Za-1;e>=3&&n.bl_tree[Bc[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},wu=(n,e,t,i)=>{let r;for(Lt(n,e-257,5),Lt(n,t-1,5),Lt(n,i-4,4),r=0;r<i;r++)Lt(n,n.bl_tree[Bc[r]*2+1],3);So(n,n.dyn_ltree,e-1),So(n,n.dyn_dtree,t-1)},Ru=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return mo;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return _o;for(t=32;t<mr;t++)if(n.dyn_ltree[t*2]!==0)return _o;return mo};let Mo=!1;const Cu=n=>{Mo||(Tu(),Mo=!0),n.l_desc=new Fs(n.dyn_ltree,kc),n.d_desc=new Fs(n.dyn_dtree,Hc),n.bl_desc=new Fs(n.bl_tree,Vc),n.bi_buf=0,n.bi_valid=0,qc(n)},Zc=(n,e,t,i)=>{Lt(n,(_u<<1)+(i?1:0),3),Yc(n),ar(n,t),ar(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},Iu=n=>{Lt(n,Uc<<1,3),Qt(n,$a,fn),yu(n)},Lu=(n,e,t,i)=>{let r,s,o=0;n.level>0?(n.strm.data_type===mu&&(n.strm.data_type=Ru(n)),Ra(n,n.l_desc),Ra(n,n.d_desc),o=Au(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?Zc(n,e,t,i):n.strategy===pu||s===r?(Lt(n,(Uc<<1)+(i?1:0),3),xo(n,fn,Ji)):(Lt(n,(gu<<1)+(i?1:0),3),wu(n,n.l_desc.max_code+1,n.d_desc.max_code+1,o+1),xo(n,n.dyn_ltree,n.dyn_dtree)),qc(n),i&&Yc(n)},Du=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(sr[t]+mr+1)*2]++,n.dyn_dtree[Gc(e)*2]++),n.sym_next===n.sym_end);var Pu=Cu,Uu=Zc,Nu=Lu,Fu=Du,Ou=Iu,zu={_tr_init:Pu,_tr_stored_block:Uu,_tr_flush_block:Nu,_tr_tally:Fu,_tr_align:Ou};const Bu=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,o=0;for(;t!==0;){o=t>2e3?2e3:t,t-=o;do r=r+e[i++]|0,s=s+r|0;while(--o);r%=65521,s%=65521}return r|s<<16|0};var or=Bu;const ku=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},Hu=new Uint32Array(ku()),Vu=(n,e,t,i)=>{const r=Hu,s=i+t;n^=-1;for(let o=i;o<s;o++)n=n>>>8^r[(n^e[o])&255];return n^-1};var pt=Vu,Jn={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},_r={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Gu,_tr_stored_block:Ca,_tr_flush_block:Wu,_tr_tally:Cn,_tr_align:Xu}=zu,{Z_NO_FLUSH:In,Z_PARTIAL_FLUSH:qu,Z_FULL_FLUSH:Yu,Z_FINISH:Gt,Z_BLOCK:Eo,Z_OK:xt,Z_STREAM_END:yo,Z_STREAM_ERROR:en,Z_DATA_ERROR:Zu,Z_BUF_ERROR:zs,Z_DEFAULT_COMPRESSION:$u,Z_FILTERED:Ku,Z_HUFFMAN_ONLY:Tr,Z_RLE:ju,Z_FIXED:Ju,Z_DEFAULT_STRATEGY:Qu,Z_UNKNOWN:ed,Z_DEFLATED:xs}=_r,td=9,nd=15,id=8,rd=29,sd=256,Ia=sd+1+rd,ad=30,od=19,ld=2*Ia+1,cd=15,qe=3,An=258,tn=An+qe+1,hd=32,Pi=42,ja=57,La=69,Da=73,Pa=91,Ua=103,Yn=113,Ki=666,wt=1,ki=2,Qn=3,Hi=4,ud=3,Zn=(n,e)=>(n.msg=Jn[e],e),bo=n=>n*2-(n>4?9:0),Tn=n=>{let e=n.length;for(;--e>=0;)n[e]=0},dd=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let fd=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,Ln=fd;const Ot=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},zt=(n,e)=>{Wu(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,Ot(n.strm)},$e=(n,e)=>{n.pending_buf[n.pending++]=e},Wi=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Na=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=or(n.adler,e,r,t):n.state.wrap===2&&(n.adler=pt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},$c=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,o=n.prev_length,a=n.nice_match;const c=n.strstart>n.w_size-tn?n.strstart-(n.w_size-tn):0,l=n.window,h=n.w_mask,d=n.prev,u=n.strstart+An;let p=l[i+o-1],_=l[i+o];n.prev_length>=n.good_match&&(t>>=2),a>n.lookahead&&(a=n.lookahead);do if(r=e,!(l[r+o]!==_||l[r+o-1]!==p||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<u);if(s=An-(u-i),i=u-An,s>o){if(n.match_start=e,o=s,s>=a)break;p=l[i+o-1],_=l[i+o]}}while((e=d[e&h])>c&&--t!==0);return o<=n.lookahead?o:n.lookahead},Ui=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-tn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),dd(n),i+=e),n.strm.avail_in===0)break;if(t=Na(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=qe)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=Ln(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=Ln(n,n.ins_h,n.window[r+qe-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<qe)););}while(n.lookahead<tn&&n.strm.avail_in!==0)},Kc=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,o=0,a=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==Gt||e===In||i!==r+n.strm.avail_in)))break;o=e===Gt&&i===r+n.strm.avail_in?1:0,Ca(n,0,0,o),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,Ot(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Na(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(o===0);return a-=n.strm.avail_in,a&&(a>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=a&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-a,n.strm.next_in),n.strstart),n.strstart+=a,n.insert+=a>n.w_size-n.insert?n.w_size-n.insert:a),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),o?Hi:e!==In&&e!==Gt&&n.strm.avail_in===0&&n.strstart===n.block_start?ki:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Na(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===Gt)&&e!==In&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,o=e===Gt&&n.strm.avail_in===0&&i===r?1:0,Ca(n,n.block_start,i,o),n.block_start+=i,Ot(n.strm)),o?Qn:wt)},Bs=(n,e)=>{let t,i;for(;;){if(n.lookahead<tn){if(Ui(n),n.lookahead<tn&&e===In)return wt;if(n.lookahead===0)break}if(t=0,n.lookahead>=qe&&(n.ins_h=Ln(n,n.ins_h,n.window[n.strstart+qe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-tn&&(n.match_length=$c(n,t)),n.match_length>=qe)if(i=Cn(n,n.strstart-n.match_start,n.match_length-qe),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=qe){n.match_length--;do n.strstart++,n.ins_h=Ln(n,n.ins_h,n.window[n.strstart+qe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Ln(n,n.ins_h,n.window[n.strstart+1]);else i=Cn(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(zt(n,!1),n.strm.avail_out===0))return wt}return n.insert=n.strstart<qe-1?n.strstart:qe-1,e===Gt?(zt(n,!0),n.strm.avail_out===0?Qn:Hi):n.sym_next&&(zt(n,!1),n.strm.avail_out===0)?wt:ki},ai=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<tn){if(Ui(n),n.lookahead<tn&&e===In)return wt;if(n.lookahead===0)break}if(t=0,n.lookahead>=qe&&(n.ins_h=Ln(n,n.ins_h,n.window[n.strstart+qe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=qe-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-tn&&(n.match_length=$c(n,t),n.match_length<=5&&(n.strategy===Ku||n.match_length===qe&&n.strstart-n.match_start>4096)&&(n.match_length=qe-1)),n.prev_length>=qe&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-qe,i=Cn(n,n.strstart-1-n.prev_match,n.prev_length-qe),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=Ln(n,n.ins_h,n.window[n.strstart+qe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=qe-1,n.strstart++,i&&(zt(n,!1),n.strm.avail_out===0))return wt}else if(n.match_available){if(i=Cn(n,0,n.window[n.strstart-1]),i&&zt(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return wt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Cn(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<qe-1?n.strstart:qe-1,e===Gt?(zt(n,!0),n.strm.avail_out===0?Qn:Hi):n.sym_next&&(zt(n,!1),n.strm.avail_out===0)?wt:ki},pd=(n,e)=>{let t,i,r,s;const o=n.window;for(;;){if(n.lookahead<=An){if(Ui(n),n.lookahead<=An&&e===In)return wt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=qe&&n.strstart>0&&(r=n.strstart-1,i=o[r],i===o[++r]&&i===o[++r]&&i===o[++r])){s=n.strstart+An;do;while(i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&r<s);n.match_length=An-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=qe?(t=Cn(n,1,n.match_length-qe),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Cn(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(zt(n,!1),n.strm.avail_out===0))return wt}return n.insert=0,e===Gt?(zt(n,!0),n.strm.avail_out===0?Qn:Hi):n.sym_next&&(zt(n,!1),n.strm.avail_out===0)?wt:ki},md=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Ui(n),n.lookahead===0)){if(e===In)return wt;break}if(n.match_length=0,t=Cn(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(zt(n,!1),n.strm.avail_out===0))return wt}return n.insert=0,e===Gt?(zt(n,!0),n.strm.avail_out===0?Qn:Hi):n.sym_next&&(zt(n,!1),n.strm.avail_out===0)?wt:ki};function jt(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const ji=[new jt(0,0,0,0,Kc),new jt(4,4,8,4,Bs),new jt(4,5,16,8,Bs),new jt(4,6,32,32,Bs),new jt(4,4,16,16,ai),new jt(8,16,32,32,ai),new jt(8,16,128,128,ai),new jt(8,32,128,256,ai),new jt(32,128,258,1024,ai),new jt(32,258,258,4096,ai)],_d=n=>{n.window_size=2*n.w_size,Tn(n.head),n.max_lazy_match=ji[n.level].max_lazy,n.good_match=ji[n.level].good_length,n.nice_match=ji[n.level].nice_length,n.max_chain_length=ji[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=qe-1,n.match_available=0,n.ins_h=0};function gd(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=xs,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(ld*2),this.dyn_dtree=new Uint16Array((2*ad+1)*2),this.bl_tree=new Uint16Array((2*od+1)*2),Tn(this.dyn_ltree),Tn(this.dyn_dtree),Tn(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(cd+1),this.heap=new Uint16Array(2*Ia+1),Tn(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ia+1),Tn(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const gr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Pi&&e.status!==ja&&e.status!==La&&e.status!==Da&&e.status!==Pa&&e.status!==Ua&&e.status!==Yn&&e.status!==Ki?1:0},jc=n=>{if(gr(n))return Zn(n,en);n.total_in=n.total_out=0,n.data_type=ed;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?ja:e.wrap?Pi:Yn,n.adler=e.wrap===2?0:1,e.last_flush=-2,Gu(e),xt},Jc=n=>{const e=jc(n);return e===xt&&_d(n.state),e},xd=(n,e)=>gr(n)||n.state.wrap!==2?en:(n.state.gzhead=e,xt),Qc=(n,e,t,i,r,s)=>{if(!n)return en;let o=1;if(e===$u&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>td||t!==xs||i<8||i>15||e<0||e>9||s<0||s>Ju||i===8&&o!==1)return Zn(n,en);i===8&&(i=9);const a=new gd;return n.state=a,a.strm=n,a.status=Pi,a.wrap=o,a.gzhead=null,a.w_bits=i,a.w_size=1<<a.w_bits,a.w_mask=a.w_size-1,a.hash_bits=r+7,a.hash_size=1<<a.hash_bits,a.hash_mask=a.hash_size-1,a.hash_shift=~~((a.hash_bits+qe-1)/qe),a.window=new Uint8Array(a.w_size*2),a.head=new Uint16Array(a.hash_size),a.prev=new Uint16Array(a.w_size),a.lit_bufsize=1<<r+6,a.pending_buf_size=a.lit_bufsize*4,a.pending_buf=new Uint8Array(a.pending_buf_size),a.sym_buf=a.lit_bufsize,a.sym_end=(a.lit_bufsize-1)*3,a.level=e,a.strategy=s,a.method=t,Jc(n)},vd=(n,e)=>Qc(n,e,xs,nd,id,Qu),Sd=(n,e)=>{if(gr(n)||e>Eo||e<0)return n?Zn(n,en):en;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===Ki&&e!==Gt)return Zn(n,n.avail_out===0?zs:en);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(Ot(n),n.avail_out===0)return t.last_flush=-1,xt}else if(n.avail_in===0&&bo(e)<=bo(i)&&e!==Gt)return Zn(n,zs);if(t.status===Ki&&n.avail_in!==0)return Zn(n,zs);if(t.status===Pi&&t.wrap===0&&(t.status=Yn),t.status===Pi){let r=xs+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Tr||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=hd),r+=31-r%31,Wi(t,r),t.strstart!==0&&(Wi(t,n.adler>>>16),Wi(t,n.adler&65535)),n.adler=1,t.status=Yn,Ot(n),t.pending!==0)return t.last_flush=-1,xt}if(t.status===ja){if(n.adler=0,$e(t,31),$e(t,139),$e(t,8),t.gzhead)$e(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),$e(t,t.gzhead.time&255),$e(t,t.gzhead.time>>8&255),$e(t,t.gzhead.time>>16&255),$e(t,t.gzhead.time>>24&255),$e(t,t.level===9?2:t.strategy>=Tr||t.level<2?4:0),$e(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&($e(t,t.gzhead.extra.length&255),$e(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=pt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=La;else if($e(t,0),$e(t,0),$e(t,0),$e(t,0),$e(t,0),$e(t,t.level===9?2:t.strategy>=Tr||t.level<2?4:0),$e(t,ud),t.status=Yn,Ot(n),t.pending!==0)return t.last_flush=-1,xt}if(t.status===La){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let a=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+a),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=a,Ot(n),t.pending!==0)return t.last_flush=-1,xt;r=0,s-=a}let o=new Uint8Array(t.gzhead.extra);t.pending_buf.set(o.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Da}if(t.status===Da){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=pt(n.adler,t.pending_buf,t.pending-r,r)),Ot(n),t.pending!==0)return t.last_flush=-1,xt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,$e(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Pa}if(t.status===Pa){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=pt(n.adler,t.pending_buf,t.pending-r,r)),Ot(n),t.pending!==0)return t.last_flush=-1,xt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,$e(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=pt(n.adler,t.pending_buf,t.pending-r,r))}t.status=Ua}if(t.status===Ua){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(Ot(n),t.pending!==0))return t.last_flush=-1,xt;$e(t,n.adler&255),$e(t,n.adler>>8&255),n.adler=0}if(t.status=Yn,Ot(n),t.pending!==0)return t.last_flush=-1,xt}if(n.avail_in!==0||t.lookahead!==0||e!==In&&t.status!==Ki){let r=t.level===0?Kc(t,e):t.strategy===Tr?md(t,e):t.strategy===ju?pd(t,e):ji[t.level].func(t,e);if((r===Qn||r===Hi)&&(t.status=Ki),r===wt||r===Qn)return n.avail_out===0&&(t.last_flush=-1),xt;if(r===ki&&(e===qu?Xu(t):e!==Eo&&(Ca(t,0,0,!1),e===Yu&&(Tn(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),Ot(n),n.avail_out===0))return t.last_flush=-1,xt}return e!==Gt?xt:t.wrap<=0?yo:(t.wrap===2?($e(t,n.adler&255),$e(t,n.adler>>8&255),$e(t,n.adler>>16&255),$e(t,n.adler>>24&255),$e(t,n.total_in&255),$e(t,n.total_in>>8&255),$e(t,n.total_in>>16&255),$e(t,n.total_in>>24&255)):(Wi(t,n.adler>>>16),Wi(t,n.adler&65535)),Ot(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?xt:yo)},Md=n=>{if(gr(n))return en;const e=n.state.status;return n.state=null,e===Yn?Zn(n,Zu):xt},Ed=(n,e)=>{let t=e.length;if(gr(n))return en;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Pi||i.lookahead)return en;if(r===1&&(n.adler=or(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Tn(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,o=n.next_in,a=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Ui(i);i.lookahead>=qe;){let c=i.strstart,l=i.lookahead-(qe-1);do i.ins_h=Ln(i,i.ins_h,i.window[c+qe-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=qe-1,Ui(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=qe-1,i.match_available=0,n.next_in=o,n.input=a,n.avail_in=s,i.wrap=r,xt};var yd=vd,bd=Qc,Td=Jc,Ad=jc,wd=xd,Rd=Sd,Cd=Md,Id=Ed,Ld="pako deflate (from Nodeca project)",Qi={deflateInit:yd,deflateInit2:bd,deflateReset:Td,deflateResetKeep:Ad,deflateSetHeader:wd,deflate:Rd,deflateEnd:Cd,deflateSetDictionary:Id,deflateInfo:Ld};const Dd=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var Pd=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)Dd(t,i)&&(n[i]=t[i])}}return n},Ud=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let o=n[i];t.set(o,r),r+=o.length}return t},vs={assign:Pd,flattenChunks:Ud};let eh=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{eh=!1}const lr=new Uint8Array(256);for(let n=0;n<256;n++)lr[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;lr[254]=lr[254]=1;var Nd=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,o=n.length,a=0;for(r=0;r<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<o&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),a+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(a),s=0,r=0;s<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<o&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const Fd=(n,e)=>{if(e<65534&&n.subarray&&eh)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var Od=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let o=n[i++];if(o<128){s[r++]=o;continue}let a=lr[o];if(a>4){s[r++]=65533,i+=a-1;continue}for(o&=a===2?31:a===3?15:7;a>1&&i<t;)o=o<<6|n[i++]&63,a--;if(a>1){s[r++]=65533;continue}o<65536?s[r++]=o:(o-=65536,s[r++]=55296|o>>10&1023,s[r++]=56320|o&1023)}return Fd(s,r)},zd=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+lr[n[t]]>e?t:e},cr={string2buf:Nd,buf2string:Od,utf8border:zd};function Bd(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var th=Bd;const nh=Object.prototype.toString,{Z_NO_FLUSH:kd,Z_SYNC_FLUSH:Hd,Z_FULL_FLUSH:Vd,Z_FINISH:Gd,Z_OK:os,Z_STREAM_END:Wd,Z_DEFAULT_COMPRESSION:Xd,Z_DEFAULT_STRATEGY:qd,Z_DEFLATED:Yd}=_r;function xr(n){this.options=vs.assign({level:Xd,method:Yd,chunkSize:16384,windowBits:15,memLevel:8,strategy:qd},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new th,this.strm.avail_out=0;let t=Qi.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==os)throw new Error(Jn[t]);if(e.header&&Qi.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=cr.string2buf(e.dictionary):nh.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Qi.deflateSetDictionary(this.strm,i),t!==os)throw new Error(Jn[t]);this._dict_set=!0}}xr.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?Gd:kd,typeof n=="string"?t.input=cr.string2buf(n):nh.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===Hd||s===Vd)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Qi.deflate(t,s),r===Wd)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Qi.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===os;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};xr.prototype.onData=function(n){this.chunks.push(n)};xr.prototype.onEnd=function(n){n===os&&(this.result=vs.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Ja(n,e){const t=new xr(e);if(t.push(n,!0),t.err)throw t.msg||Jn[t.err];return t.result}function Zd(n,e){return e=e||{},e.raw=!0,Ja(n,e)}function $d(n,e){return e=e||{},e.gzip=!0,Ja(n,e)}var Kd=xr,jd=Ja,Jd=Zd,Qd=$d,ef={Deflate:Kd,deflate:jd,deflateRaw:Jd,gzip:Qd};const Ar=16209,tf=16191;var nf=function(e,t){let i,r,s,o,a,c,l,h,d,u,p,_,g,m,f,b,x,M,I,R,A,k,S,y;const P=e.state;i=e.next_in,S=e.input,r=i+(e.avail_in-5),s=e.next_out,y=e.output,o=s-(t-e.avail_out),a=s+(e.avail_out-257),c=P.dmax,l=P.wsize,h=P.whave,d=P.wnext,u=P.window,p=P.hold,_=P.bits,g=P.lencode,m=P.distcode,f=(1<<P.lenbits)-1,b=(1<<P.distbits)-1;e:do{_<15&&(p+=S[i++]<<_,_+=8,p+=S[i++]<<_,_+=8),x=g[p&f];t:for(;;){if(M=x>>>24,p>>>=M,_-=M,M=x>>>16&255,M===0)y[s++]=x&65535;else if(M&16){I=x&65535,M&=15,M&&(_<M&&(p+=S[i++]<<_,_+=8),I+=p&(1<<M)-1,p>>>=M,_-=M),_<15&&(p+=S[i++]<<_,_+=8,p+=S[i++]<<_,_+=8),x=m[p&b];n:for(;;){if(M=x>>>24,p>>>=M,_-=M,M=x>>>16&255,M&16){if(R=x&65535,M&=15,_<M&&(p+=S[i++]<<_,_+=8,_<M&&(p+=S[i++]<<_,_+=8)),R+=p&(1<<M)-1,R>c){e.msg="invalid distance too far back",P.mode=Ar;break e}if(p>>>=M,_-=M,M=s-o,R>M){if(M=R-M,M>h&&P.sane){e.msg="invalid distance too far back",P.mode=Ar;break e}if(A=0,k=u,d===0){if(A+=l-M,M<I){I-=M;do y[s++]=u[A++];while(--M);A=s-R,k=y}}else if(d<M){if(A+=l+d-M,M-=d,M<I){I-=M;do y[s++]=u[A++];while(--M);if(A=0,d<I){M=d,I-=M;do y[s++]=u[A++];while(--M);A=s-R,k=y}}}else if(A+=d-M,M<I){I-=M;do y[s++]=u[A++];while(--M);A=s-R,k=y}for(;I>2;)y[s++]=k[A++],y[s++]=k[A++],y[s++]=k[A++],I-=3;I&&(y[s++]=k[A++],I>1&&(y[s++]=k[A++]))}else{A=s-R;do y[s++]=y[A++],y[s++]=y[A++],y[s++]=y[A++],I-=3;while(I>2);I&&(y[s++]=y[A++],I>1&&(y[s++]=y[A++]))}}else if(M&64){e.msg="invalid distance code",P.mode=Ar;break e}else{x=m[(x&65535)+(p&(1<<M)-1)];continue n}break}}else if(M&64)if(M&32){P.mode=tf;break e}else{e.msg="invalid literal/length code",P.mode=Ar;break e}else{x=g[(x&65535)+(p&(1<<M)-1)];continue t}break}}while(i<r&&s<a);I=_>>3,i-=I,_-=I<<3,p&=(1<<_)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<a?257+(a-s):257-(s-a),P.hold=p,P.bits=_};const oi=15,To=852,Ao=592,wo=0,ks=1,Ro=2,rf=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),sf=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),af=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),of=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),lf=(n,e,t,i,r,s,o,a)=>{const c=a.bits;let l=0,h=0,d=0,u=0,p=0,_=0,g=0,m=0,f=0,b=0,x,M,I,R,A,k=null,S;const y=new Uint16Array(oi+1),P=new Uint16Array(oi+1);let W=null,$,L,N;for(l=0;l<=oi;l++)y[l]=0;for(h=0;h<i;h++)y[e[t+h]]++;for(p=c,u=oi;u>=1&&y[u]===0;u--);if(p>u&&(p=u),u===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,a.bits=1,0;for(d=1;d<u&&y[d]===0;d++);for(p<d&&(p=d),m=1,l=1;l<=oi;l++)if(m<<=1,m-=y[l],m<0)return-1;if(m>0&&(n===wo||u!==1))return-1;for(P[1]=0,l=1;l<oi;l++)P[l+1]=P[l]+y[l];for(h=0;h<i;h++)e[t+h]!==0&&(o[P[e[t+h]]++]=h);if(n===wo?(k=W=o,S=20):n===ks?(k=rf,W=sf,S=257):(k=af,W=of,S=0),b=0,h=0,l=d,A=s,_=p,g=0,I=-1,f=1<<p,R=f-1,n===ks&&f>To||n===Ro&&f>Ao)return 1;for(;;){$=l-g,o[h]+1<S?(L=0,N=o[h]):o[h]>=S?(L=W[o[h]-S],N=k[o[h]-S]):(L=96,N=0),x=1<<l-g,M=1<<_,d=M;do M-=x,r[A+(b>>g)+M]=$<<24|L<<16|N|0;while(M!==0);for(x=1<<l-1;b&x;)x>>=1;if(x!==0?(b&=x-1,b+=x):b=0,h++,--y[l]===0){if(l===u)break;l=e[t+o[h]]}if(l>p&&(b&R)!==I){for(g===0&&(g=p),A+=d,_=l-g,m=1<<_;_+g<u&&(m-=y[_+g],!(m<=0));)_++,m<<=1;if(f+=1<<_,n===ks&&f>To||n===Ro&&f>Ao)return 1;I=b&R,r[I]=p<<24|_<<16|A-s|0}}return b!==0&&(r[A+b]=l-g<<24|64<<16|0),a.bits=p,0};var er=lf;const cf=0,ih=1,rh=2,{Z_FINISH:Co,Z_BLOCK:hf,Z_TREES:wr,Z_OK:ei,Z_STREAM_END:uf,Z_NEED_DICT:df,Z_STREAM_ERROR:Xt,Z_DATA_ERROR:sh,Z_MEM_ERROR:ah,Z_BUF_ERROR:ff,Z_DEFLATED:Io}=_r,Ss=16180,Lo=16181,Do=16182,Po=16183,Uo=16184,No=16185,Fo=16186,Oo=16187,zo=16188,Bo=16189,ls=16190,an=16191,Hs=16192,ko=16193,Vs=16194,Ho=16195,Vo=16196,Go=16197,Wo=16198,Rr=16199,Cr=16200,Xo=16201,qo=16202,Yo=16203,Zo=16204,$o=16205,Gs=16206,Ko=16207,jo=16208,nt=16209,oh=16210,lh=16211,pf=852,mf=592,_f=15,gf=_f,Jo=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function xf(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const ri=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<Ss||e.mode>lh?1:0},ch=n=>{if(ri(n))return Xt;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=Ss,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(pf),e.distcode=e.distdyn=new Int32Array(mf),e.sane=1,e.back=-1,ei},hh=n=>{if(ri(n))return Xt;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,ch(n)},uh=(n,e)=>{let t;if(ri(n))return Xt;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Xt:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,hh(n))},dh=(n,e)=>{if(!n)return Xt;const t=new xf;n.state=t,t.strm=n,t.window=null,t.mode=Ss;const i=uh(n,e);return i!==ei&&(n.state=null),i},vf=n=>dh(n,gf);let Qo=!0,Ws,Xs;const Sf=n=>{if(Qo){Ws=new Int32Array(512),Xs=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(er(ih,n.lens,0,288,Ws,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;er(rh,n.lens,0,32,Xs,0,n.work,{bits:5}),Qo=!1}n.lencode=Ws,n.lenbits=9,n.distcode=Xs,n.distbits=5},fh=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},Mf=(n,e)=>{let t,i,r,s,o,a,c,l,h,d,u,p,_,g,m=0,f,b,x,M,I,R,A,k;const S=new Uint8Array(4);let y,P;const W=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(ri(n)||!n.output||!n.input&&n.avail_in!==0)return Xt;t=n.state,t.mode===an&&(t.mode=Hs),o=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,a=n.avail_in,l=t.hold,h=t.bits,d=a,u=c,k=ei;e:for(;;)switch(t.mode){case Ss:if(t.wrap===0){t.mode=Hs;break}for(;h<16;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,S[0]=l&255,S[1]=l>>>8&255,t.check=pt(t.check,S,2,0),l=0,h=0,t.mode=Lo;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=nt;break}if((l&15)!==Io){n.msg="unknown compression method",t.mode=nt;break}if(l>>>=4,h-=4,A=(l&15)+8,t.wbits===0&&(t.wbits=A),A>15||A>t.wbits){n.msg="invalid window size",t.mode=nt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?Bo:an,l=0,h=0;break;case Lo:for(;h<16;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==Io){n.msg="unknown compression method",t.mode=nt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=nt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,t.check=pt(t.check,S,2,0)),l=0,h=0,t.mode=Do;case Do:for(;h<32;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,S[2]=l>>>16&255,S[3]=l>>>24&255,t.check=pt(t.check,S,4,0)),l=0,h=0,t.mode=Po;case Po:for(;h<16;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,t.check=pt(t.check,S,2,0)),l=0,h=0,t.mode=Uo;case Uo:if(t.flags&1024){for(;h<16;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,t.check=pt(t.check,S,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=No;case No:if(t.flags&1024&&(p=t.length,p>a&&(p=a),p&&(t.head&&(A=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+p),A)),t.flags&512&&t.wrap&4&&(t.check=pt(t.check,i,p,s)),a-=p,s+=p,t.length-=p),t.length))break e;t.length=0,t.mode=Fo;case Fo:if(t.flags&2048){if(a===0)break e;p=0;do A=i[s+p++],t.head&&A&&t.length<65536&&(t.head.name+=String.fromCharCode(A));while(A&&p<a);if(t.flags&512&&t.wrap&4&&(t.check=pt(t.check,i,p,s)),a-=p,s+=p,A)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Oo;case Oo:if(t.flags&4096){if(a===0)break e;p=0;do A=i[s+p++],t.head&&A&&t.length<65536&&(t.head.comment+=String.fromCharCode(A));while(A&&p<a);if(t.flags&512&&t.wrap&4&&(t.check=pt(t.check,i,p,s)),a-=p,s+=p,A)break e}else t.head&&(t.head.comment=null);t.mode=zo;case zo:if(t.flags&512){for(;h<16;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=nt;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=an;break;case Bo:for(;h<32;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}n.adler=t.check=Jo(l),l=0,h=0,t.mode=ls;case ls:if(t.havedict===0)return n.next_out=o,n.avail_out=c,n.next_in=s,n.avail_in=a,t.hold=l,t.bits=h,df;n.adler=t.check=1,t.mode=an;case an:if(e===hf||e===wr)break e;case Hs:if(t.last){l>>>=h&7,h-=h&7,t.mode=Gs;break}for(;h<3;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=ko;break;case 1:if(Sf(t),t.mode=Rr,e===wr){l>>>=2,h-=2;break e}break;case 2:t.mode=Vo;break;case 3:n.msg="invalid block type",t.mode=nt}l>>>=2,h-=2;break;case ko:for(l>>>=h&7,h-=h&7;h<32;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=nt;break}if(t.length=l&65535,l=0,h=0,t.mode=Vs,e===wr)break e;case Vs:t.mode=Ho;case Ho:if(p=t.length,p){if(p>a&&(p=a),p>c&&(p=c),p===0)break e;r.set(i.subarray(s,s+p),o),a-=p,s+=p,c-=p,o+=p,t.length-=p;break}t.mode=an;break;case Vo:for(;h<14;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=nt;break}t.have=0,t.mode=Go;case Go:for(;t.have<t.ncode;){for(;h<3;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}t.lens[W[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[W[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,y={bits:t.lenbits},k=er(cf,t.lens,0,19,t.lencode,0,t.work,y),t.lenbits=y.bits,k){n.msg="invalid code lengths set",t.mode=nt;break}t.have=0,t.mode=Wo;case Wo:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],f=m>>>24,b=m>>>16&255,x=m&65535,!(f<=h);){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(x<16)l>>>=f,h-=f,t.lens[t.have++]=x;else{if(x===16){for(P=f+2;h<P;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(l>>>=f,h-=f,t.have===0){n.msg="invalid bit length repeat",t.mode=nt;break}A=t.lens[t.have-1],p=3+(l&3),l>>>=2,h-=2}else if(x===17){for(P=f+3;h<P;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}l>>>=f,h-=f,A=0,p=3+(l&7),l>>>=3,h-=3}else{for(P=f+7;h<P;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}l>>>=f,h-=f,A=0,p=11+(l&127),l>>>=7,h-=7}if(t.have+p>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=nt;break}for(;p--;)t.lens[t.have++]=A}}if(t.mode===nt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=nt;break}if(t.lenbits=9,y={bits:t.lenbits},k=er(ih,t.lens,0,t.nlen,t.lencode,0,t.work,y),t.lenbits=y.bits,k){n.msg="invalid literal/lengths set",t.mode=nt;break}if(t.distbits=6,t.distcode=t.distdyn,y={bits:t.distbits},k=er(rh,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,y),t.distbits=y.bits,k){n.msg="invalid distances set",t.mode=nt;break}if(t.mode=Rr,e===wr)break e;case Rr:t.mode=Cr;case Cr:if(a>=6&&c>=258){n.next_out=o,n.avail_out=c,n.next_in=s,n.avail_in=a,t.hold=l,t.bits=h,nf(n,u),o=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,a=n.avail_in,l=t.hold,h=t.bits,t.mode===an&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],f=m>>>24,b=m>>>16&255,x=m&65535,!(f<=h);){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(b&&!(b&240)){for(M=f,I=b,R=x;m=t.lencode[R+((l&(1<<M+I)-1)>>M)],f=m>>>24,b=m>>>16&255,x=m&65535,!(M+f<=h);){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}l>>>=M,h-=M,t.back+=M}if(l>>>=f,h-=f,t.back+=f,t.length=x,b===0){t.mode=$o;break}if(b&32){t.back=-1,t.mode=an;break}if(b&64){n.msg="invalid literal/length code",t.mode=nt;break}t.extra=b&15,t.mode=Xo;case Xo:if(t.extra){for(P=t.extra;h<P;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=qo;case qo:for(;m=t.distcode[l&(1<<t.distbits)-1],f=m>>>24,b=m>>>16&255,x=m&65535,!(f<=h);){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(!(b&240)){for(M=f,I=b,R=x;m=t.distcode[R+((l&(1<<M+I)-1)>>M)],f=m>>>24,b=m>>>16&255,x=m&65535,!(M+f<=h);){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}l>>>=M,h-=M,t.back+=M}if(l>>>=f,h-=f,t.back+=f,b&64){n.msg="invalid distance code",t.mode=nt;break}t.offset=x,t.extra=b&15,t.mode=Yo;case Yo:if(t.extra){for(P=t.extra;h<P;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=nt;break}t.mode=Zo;case Zo:if(c===0)break e;if(p=u-c,t.offset>p){if(p=t.offset-p,p>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=nt;break}p>t.wnext?(p-=t.wnext,_=t.wsize-p):_=t.wnext-p,p>t.length&&(p=t.length),g=t.window}else g=r,_=o-t.offset,p=t.length;p>c&&(p=c),c-=p,t.length-=p;do r[o++]=g[_++];while(--p);t.length===0&&(t.mode=Cr);break;case $o:if(c===0)break e;r[o++]=t.length,c--,t.mode=Cr;break;case Gs:if(t.wrap){for(;h<32;){if(a===0)break e;a--,l|=i[s++]<<h,h+=8}if(u-=c,n.total_out+=u,t.total+=u,t.wrap&4&&u&&(n.adler=t.check=t.flags?pt(t.check,r,u,o-u):or(t.check,r,u,o-u)),u=c,t.wrap&4&&(t.flags?l:Jo(l))!==t.check){n.msg="incorrect data check",t.mode=nt;break}l=0,h=0}t.mode=Ko;case Ko:if(t.wrap&&t.flags){for(;h<32;){if(a===0)break e;a--,l+=i[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=nt;break}l=0,h=0}t.mode=jo;case jo:k=uf;break e;case nt:k=sh;break e;case oh:return ah;case lh:default:return Xt}return n.next_out=o,n.avail_out=c,n.next_in=s,n.avail_in=a,t.hold=l,t.bits=h,(t.wsize||u!==n.avail_out&&t.mode<nt&&(t.mode<Gs||e!==Co))&&fh(n,n.output,n.next_out,u-n.avail_out),d-=n.avail_in,u-=n.avail_out,n.total_in+=d,n.total_out+=u,t.total+=u,t.wrap&4&&u&&(n.adler=t.check=t.flags?pt(t.check,r,u,n.next_out-u):or(t.check,r,u,n.next_out-u)),n.data_type=t.bits+(t.last?64:0)+(t.mode===an?128:0)+(t.mode===Rr||t.mode===Vs?256:0),(d===0&&u===0||e===Co)&&k===ei&&(k=ff),k},Ef=n=>{if(ri(n))return Xt;let e=n.state;return e.window&&(e.window=null),n.state=null,ei},yf=(n,e)=>{if(ri(n))return Xt;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,ei):Xt},bf=(n,e)=>{const t=e.length;let i,r,s;return ri(n)||(i=n.state,i.wrap!==0&&i.mode!==ls)?Xt:i.mode===ls&&(r=1,r=or(r,e,t,0),r!==i.check)?sh:(s=fh(n,e,t,t),s?(i.mode=oh,ah):(i.havedict=1,ei))};var Tf=hh,Af=uh,wf=ch,Rf=vf,Cf=dh,If=Mf,Lf=Ef,Df=yf,Pf=bf,Uf="pako inflate (from Nodeca project)",pn={inflateReset:Tf,inflateReset2:Af,inflateResetKeep:wf,inflateInit:Rf,inflateInit2:Cf,inflate:If,inflateEnd:Lf,inflateGetHeader:Df,inflateSetDictionary:Pf,inflateInfo:Uf};function Nf(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Ff=Nf;const ph=Object.prototype.toString,{Z_NO_FLUSH:Of,Z_FINISH:zf,Z_OK:hr,Z_STREAM_END:qs,Z_NEED_DICT:Ys,Z_STREAM_ERROR:Bf,Z_DATA_ERROR:el,Z_MEM_ERROR:kf}=_r;function vr(n){this.options=vs.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new th,this.strm.avail_out=0;let t=pn.inflateInit2(this.strm,e.windowBits);if(t!==hr)throw new Error(Jn[t]);if(this.header=new Ff,pn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=cr.string2buf(e.dictionary):ph.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=pn.inflateSetDictionary(this.strm,e.dictionary),t!==hr)))throw new Error(Jn[t])}vr.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,o,a;if(this.ended)return!1;for(e===~~e?o=e:o=e===!0?zf:Of,ph.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=pn.inflate(t,o),s===Ys&&r&&(s=pn.inflateSetDictionary(t,r),s===hr?s=pn.inflate(t,o):s===el&&(s=Ys));t.avail_in>0&&s===qs&&t.state.wrap>0&&n[t.next_in]!==0;)pn.inflateReset(t),s=pn.inflate(t,o);switch(s){case Bf:case el:case Ys:case kf:return this.onEnd(s),this.ended=!0,!1}if(a=t.avail_out,t.next_out&&(t.avail_out===0||s===qs))if(this.options.to==="string"){let c=cr.utf8border(t.output,t.next_out),l=t.next_out-c,h=cr.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===hr&&a===0)){if(s===qs)return s=pn.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};vr.prototype.onData=function(n){this.chunks.push(n)};vr.prototype.onEnd=function(n){n===hr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=vs.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Qa(n,e){const t=new vr(e);if(t.push(n),t.err)throw t.msg||Jn[t.err];return t.result}function Hf(n,e){return e=e||{},e.raw=!0,Qa(n,e)}var Vf=vr,Gf=Qa,Wf=Hf,Xf=Qa,qf={Inflate:Vf,inflate:Gf,inflateRaw:Wf,ungzip:Xf};const{Deflate:Yf,deflate:Zf,deflateRaw:$f,gzip:Kf}=ef,{Inflate:jf,inflate:Jf,inflateRaw:Qf,ungzip:ep}=qf;var mh=Yf,_h=Zf,gh=$f,xh=Kf,vh=jf,Sh=Jf,Mh=Qf,Eh=ep,yh=_r,bh={Deflate:mh,deflate:_h,deflateRaw:gh,gzip:xh,Inflate:vh,inflate:Sh,inflateRaw:Mh,ungzip:Eh,constants:yh};const tp=Object.freeze(Object.defineProperty({__proto__:null,Deflate:mh,Inflate:vh,constants:yh,default:bh,deflate:_h,deflateRaw:gh,gzip:xh,inflate:Sh,inflateRaw:Mh,ungzip:Eh},Symbol.toStringTag,{value:"Module"})),np=du(tp);(function(n){var e=e||{};e.NIFTI1=e.NIFTI1||(typeof Xn<"u"?Pc():null),e.NIFTI2=e.NIFTI2||(typeof Xn<"u"?fu():null),e.Utils=e.Utils||(typeof Xn<"u"?qa():null);var t=t||(typeof Xn<"u"?np:null);e.isNIFTI1=function(i){var r,s,o,a;return i.byteLength<e.NIFTI1.STANDARD_HEADER_SIZE?!1:(r=new DataView(i),r&&(s=r.getUint8(e.NIFTI1.MAGIC_NUMBER_LOCATION)),o=r.getUint8(e.NIFTI1.MAGIC_NUMBER_LOCATION+1),a=r.getUint8(e.NIFTI1.MAGIC_NUMBER_LOCATION+2),s===e.NIFTI1.MAGIC_NUMBER[0]&&o===e.NIFTI1.MAGIC_NUMBER[1]&&a===e.NIFTI1.MAGIC_NUMBER[2])},e.isNIFTI2=function(i){var r,s,o,a;return i.byteLength<e.NIFTI1.STANDARD_HEADER_SIZE?!1:(r=new DataView(i),s=r.getUint8(e.NIFTI2.MAGIC_NUMBER_LOCATION),o=r.getUint8(e.NIFTI2.MAGIC_NUMBER_LOCATION+1),a=r.getUint8(e.NIFTI2.MAGIC_NUMBER_LOCATION+2),s===e.NIFTI2.MAGIC_NUMBER[0]&&o===e.NIFTI2.MAGIC_NUMBER[1]&&a===e.NIFTI2.MAGIC_NUMBER[2])},e.isNIFTI=function(i){return e.isNIFTI1(i)||e.isNIFTI2(i)},e.isCompressed=function(i){var r,s,o;return!!(i&&(r=new DataView(i),s=r.getUint8(0),o=r.getUint8(1),s===e.Utils.GUNZIP_MAGIC_COOKIE1||o===e.Utils.GUNZIP_MAGIC_COOKIE2))},e.decompress=function(i){return t.inflate(i).buffer},e.readHeader=function(i){var r=null;return e.isCompressed(i)&&(i=e.decompress(i)),e.isNIFTI1(i)?r=new e.NIFTI1:e.isNIFTI2(i)&&(r=new e.NIFTI2),r?r.readHeader(i):console.error("That file does not appear to be NIFTI!"),r},e.hasExtension=function(i){return i.extensionFlag[0]!=0},e.readImage=function(i,r){var s=i.vox_offset,o=1,a=1;i.dims[4]&&(o=i.dims[4]),i.dims[5]&&(a=i.dims[5]);var c=i.dims[1]*i.dims[2]*i.dims[3]*o*a*(i.numBitsPerVoxel/8);return r.slice(s,s+c)},e.readExtension=function(i,r){var s=i.getExtensionLocation(),o=i.extensionSize;return r.slice(s,s+o)},e.readExtensionData=function(i,r){var s=i.getExtensionLocation(),o=i.extensionSize;return r.slice(s+8,s+o-8)},n.exports&&(n.exports=e)})(Dc);var li=Dc.exports;const tl=[{r:0,g:0,b:0},{r:255,g:50,b:50},{r:50,g:255,b:50},{r:50,g:100,b:255},{r:255,g:255,b:50},{r:255,g:50,b:255},{r:50,g:255,b:255},{r:255,g:150,b:50},{r:150,g:50,b:255},{r:50,g:255,b:150},{r:255,g:100,b:100},{r:100,g:255,b:100},{r:100,g:100,b:255},{r:255,g:200,b:100},{r:200,g:100,b:255},{r:100,g:200,b:200}];class ip{async loadFromFile(e){const t=await e.arrayBuffer();return this.loadFromArrayBuffer(t,e.name)}async loadSegmentationFromFile(e){const t=await e.arrayBuffer();return this.loadSegmentationFromArrayBuffer(t,e.name)}async loadSegmentationFromArrayBuffer(e,t){let i=e;return t.endsWith(".gz")&&(i=this.decompressGzip(e)),this.parseNiftiSegmentation(i)}async loadFromArrayBuffer(e,t){let i=e;return t.endsWith(".gz")&&(i=this.decompressGzip(e)),this.parseNifti(i)}decompressGzip(e){const t=new Uint8Array(e),i=bh.inflate(t),r=new ArrayBuffer(i.length);return new Uint8Array(r).set(i),r}parseNifti(e){const t=li.readHeader(e);if(!li.isNIFTI(t))throw new Error("Invalid NIfTI file");const i=li.readImage(t,e);let r;i instanceof ArrayBuffer?r=new Uint8Array(i):i instanceof Uint8Array?r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength):r=new Uint8Array(i);const s=new ArrayBuffer(r.length);new Uint8Array(s).set(r);let o;switch(t.datatypeCode){case 2:o=new Uint8Array(s);break;case 4:o=new Int16Array(s);break;case 512:o=new Uint16Array(s);break;case 16:o=new Float32Array(s);break;case 64:{const d=new Float64Array(s);o=new Float32Array(d.length);for(let u=0;u<d.length;u++)o[u]=d[u];break}case 256:o=new Int8Array(s);break;default:o=new Float32Array(s)}const{min:c,max:l}=this.calculateMinMax(o),h=this.calculateHistogram(o,c,l);return{dimensions:{width:t.dims[1],height:t.dims[2],depth:t.dims[3]},spacing:{x:t.pixDims[1]||1,y:t.pixDims[2]||1,z:t.pixDims[3]||1},data:o,minValue:c,maxValue:l,histogram:h}}parseNiftiSegmentation(e){const t=li.readHeader(e);if(!li.isNIFTI(t))throw new Error("Invalid NIfTI segmentation file");const i=li.readImage(t,e);let r;i instanceof ArrayBuffer?r=new Uint8Array(i):i instanceof Uint8Array?r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength):r=new Uint8Array(i);const s=new ArrayBuffer(r.length);new Uint8Array(s).set(r);let o;switch(t.datatypeCode){case 2:case 256:o=new Uint8Array(s);break;case 4:o=new Int16Array(s);break;case 512:o=new Uint16Array(s);break;default:{const h=new Uint8Array(s);o=new Uint8Array(h.length);for(let d=0;d<h.length;d++)o[d]=h[d]>0?1:0}}let c=0;for(let h=0;h<o.length;h++)o[h]>c&&(c=o[h]);const l=[];for(let h=1;h<=c;h++){let d=!1;for(let u=0;u<o.length;u++)if(o[u]===h){d=!0;break}if(d){const u=h%tl.length;l.push({id:h,name:`Label ${h}`,color:{...tl[u]},opacity:.6,visible:!0})}}return{dimensions:{width:t.dims[1],height:t.dims[2],depth:t.dims[3]},data:o,maxLabel:c,labels:l}}calculateMinMax(e){let t=1/0,i=-1/0;for(let r=0;r<e.length;r++){const s=e[r];s<t&&(t=s),s>i&&(i=s)}return{min:t,max:i}}calculateHistogram(e,t,i,r=256){const s=new Array(r).fill(0),o=i-t;if(o===0)return s[0]=e.length,s;for(let a=0;a<e.length;a++){const c=e[a],l=Math.min(Math.floor((c-t)/o*r),r-1);s[l]++}return s}generateSyntheticData(){const t=new Uint8Array(2097152);for(let r=0;r<128;r++)for(let s=0;s<128;s++)for(let o=0;o<128;o++){const a=r*128*128+s*128+o,c=128/2,l=128/2,h=128/2,d=Math.sqrt((o-c)**2+(s-l)**2+(r-h)**2);d<128*.4?d<128*.15?t[a]=200:d<128*.25?t[a]=150:t[a]=80+Math.sin(o*.1)*20+Math.sin(s*.15)*15:t[a]=10+Math.random()*5}const i=new Array(256).fill(0);for(let r=0;r<t.length;r++)i[t[r]]++;return{dimensions:{width:128,height:128,depth:128},spacing:{x:1,y:1,z:1},data:t,minValue:0,maxValue:255,histogram:i}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="160",ci={ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rp=0,nl=1,sp=2,Th=1,ap=2,dn=3,Un=0,Rt=1,mn=2,Dn=0,Li=1,il=2,rl=3,sl=4,op=5,Gn=100,lp=101,cp=102,al=103,ol=104,hp=200,up=201,dp=202,fp=203,Fa=204,Oa=205,pp=206,mp=207,_p=208,gp=209,xp=210,vp=211,Sp=212,Mp=213,Ep=214,yp=0,bp=1,Tp=2,cs=3,Ap=4,wp=5,Rp=6,Cp=7,Ah=0,Ip=1,Lp=2,Pn=0,Dp=1,Pp=2,Up=3,Np=4,Fp=5,Op=6,wh=300,Ni=301,Fi=302,za=303,Ba=304,Ms=306,ka=1e3,tt=1001,Ha=1002,Je=1003,ll=1004,Zs=1005,mt=1006,zp=1007,ur=1008,Ct=1009,Bp=1010,kp=1011,Es=1012,Rh=1013,wn=1014,Rn=1015,dr=1016,Ch=1017,Ih=1018,$n=1020,Hp=1021,bt=1023,Vp=1024,Gp=1025,Kn=1026,Oi=1027,hs=1028,Lh=1029,Wp=1030,Dh=1031,Ph=1033,$s=33776,Ks=33777,js=33778,Js=33779,cl=35840,hl=35841,ul=35842,dl=35843,Uh=36196,fl=37492,pl=37496,ml=37808,_l=37809,gl=37810,xl=37811,vl=37812,Sl=37813,Ml=37814,El=37815,yl=37816,bl=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,Qs=36492,Cl=36494,Il=36495,Xp=36283,Ll=36284,Dl=36285,Pl=36286,Nh=3e3,jn=3001,qp=3200,Yp=3201,Zp=0,$p=1,Wt="",vt="srgb",gn="srgb-linear",to="display-p3",ys="display-p3-linear",us="linear",et="srgb",ds="rec709",fs="p3",ui=7680,Ul=519,Kp=512,jp=513,Jp=514,Fh=515,Qp=516,em=517,tm=518,nm=519,Nl=35044,Fl="300 es",Va=1035,_n=2e3,ps=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,Ga=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function im(n,e){return(n%e+e)%e}function ea(n,e,t){return(1-t)*n+t*e}function Ol(n){return(n&n-1)===0&&n!==0}function Wa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rm={DEG2RAD:tr};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],b=r[1],x=r[4],M=r[7],I=r[2],R=r[5],A=r[8];return s[0]=o*g+a*b+c*I,s[3]=o*m+a*x+c*R,s[6]=o*f+a*M+c*A,s[1]=l*g+h*b+d*I,s[4]=l*m+h*x+d*R,s[7]=l*f+h*M+d*A,s[2]=u*g+p*b+_*I,s[5]=u*m+p*x+_*R,s[8]=u*f+p*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*s,p=l*s-o*c,_=t*d+i*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*l-h*i)*g,e[2]=(a*i-r*o)*g,e[3]=u*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Ve;function Oh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sm(){const n=ms("canvas");return n.style.display="block",n}const zl={};function nr(n){n in zl||(zl[n]=!0,console.warn(n))}const Bl=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kl=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ir={[gn]:{transfer:us,primaries:ds,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:et,primaries:ds,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ys]:{transfer:us,primaries:fs,toReference:n=>n.applyMatrix3(kl),fromReference:n=>n.applyMatrix3(Bl)},[to]:{transfer:et,primaries:fs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(kl),fromReference:n=>n.applyMatrix3(Bl).convertLinearToSRGB()}},am=new Set([gn,ys]),je={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!am.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ir[e].toReference,r=Ir[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ir[n].primaries},getTransfer:function(n){return n===Wt?us:Ir[n].transfer}};function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let di;class zh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=ms("canvas")),di.width=e.width,di.height=e.height;const i=di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class Bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ia(r[o].image)):s.push(ia(r[o]))}else s=ia(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lm=0;class Dt extends si{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=tt,r=tt,s=mt,o=ur,a=bt,c=Ct,l=Dt.DEFAULT_ANISOTROPY,h=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Sr(),this.name="",this.source=new Bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===jn?vt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case tt:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case tt:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?jn:Nh}set encoding(e){nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jn?vt:Wt}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=wh;Dt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(p+1)/2,I=(f+1)/2,R=(h+u)/4,A=(d+g)/4,k=(_+m)/4;return x>M&&x>I?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=A/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=k/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=A/s,r=k/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-g)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===jn?vt:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kh extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const u=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==u||l!==p||h!==_){let m=1-a;const f=c*u+l*p+h*_+d*g,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const I=Math.sqrt(x),R=Math.atan2(I,f*b);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const M=a*b;if(c=c*m+u*M,l=l*m+p*M,h=h*m+_*M,d=d*m+g*M,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[o],u=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*d+c*p-l*u,e[t+1]=c*_+h*u+l*d-a*p,e[t+2]=l*_+h*p+a*u-c*d,e[t+3]=h*_-a*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),d=a(s/2),u=c(i/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"YZX":this._x=u*h*d+l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d-u*p*_;break;case"XZY":this._x=u*h*d-l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new D,Hl=new ni;class Mr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(s,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),Dr.subVectors(this.max,qi),fi.subVectors(e.a,qi),pi.subVectors(e.b,qi),mi.subVectors(e.c,qi),vn.subVectors(pi,fi),Sn.subVectors(mi,pi),zn.subVectors(fi,mi);let t=[0,-vn.z,vn.y,0,-Sn.z,Sn.y,0,-zn.z,zn.y,vn.z,0,-vn.x,Sn.z,0,-Sn.x,zn.z,0,-zn.x,-vn.y,vn.x,0,-Sn.y,Sn.x,0,-zn.y,zn.x,0];return!sa(t,fi,pi,mi,Dr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,fi,pi,mi,Dr))?!1:(Pr.crossVectors(vn,Sn),t=[Pr.x,Pr.y,Pr.z],sa(t,fi,pi,mi,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new D,new D,new D,new D,new D,new D,new D,new D],qt=new D,Lr=new Mr,fi=new D,pi=new D,mi=new D,vn=new D,Sn=new D,zn=new D,qi=new D,Dr=new D,Pr=new D,Bn=new D;function sa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Bn.fromArray(n,s);const a=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const hm=new Mr,Yi=new D,aa=new D;class bs{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(aa)),this.expandByPoint(Yi.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new D,oa=new D,Ur=new D,Mn=new D,la=new D,Nr=new D,ca=new D;class no{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oa.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(oa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=Mn.dot(this.direction),c=-Mn.dot(Ur),l=Mn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,_;if(h>0)if(d=o*c-a,u=o*a-c,_=s*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(oa).addScaledVector(Ur,u),p}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,r,s){la.subVectors(t,e),Nr.subVectors(i,e),ca.crossVectors(la,Nr);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const c=a*this.direction.dot(Nr.crossVectors(Mn,Nr));if(c<0)return null;const l=a*this.direction.dot(la.cross(Mn));if(l<0||c+l>o)return null;const h=-a*Mn.dot(ca);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,c,l,h,d,u,p,_,g,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,d,u,p,_,g,m)}set(e,t,i,r,s,o,a,c,l,h,d,u,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/_i.setFromMatrixColumn(e,0).length(),s=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=u-g*l,t[9]=-a*c,t[2]=g-u*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*d,_=l*h,g=l*d;t[0]=u+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=g+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*d,_=l*h,g=l*d;t[0]=u-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=g-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=_*l-p,t[8]=u*l+g,t[1]=c*d,t[5]=g*l+u,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-u*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+_,t[10]=u-g*d}else if(e.order==="XZY"){const u=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+g,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,dm)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),En.crossVectors(i,Nt),En.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),En.crossVectors(i,Nt)),En.normalize(),Fr.crossVectors(Nt,En),r[0]=En.x,r[4]=Fr.x,r[8]=Nt.x,r[1]=En.y,r[5]=Fr.y,r[9]=Nt.y,r[2]=En.z,r[6]=Fr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],b=i[3],x=i[7],M=i[11],I=i[15],R=r[0],A=r[4],k=r[8],S=r[12],y=r[1],P=r[5],W=r[9],$=r[13],L=r[2],N=r[6],V=r[10],Y=r[14],X=r[3],q=r[7],Z=r[11],re=r[15];return s[0]=o*R+a*y+c*L+l*X,s[4]=o*A+a*P+c*N+l*q,s[8]=o*k+a*W+c*V+l*Z,s[12]=o*S+a*$+c*Y+l*re,s[1]=h*R+d*y+u*L+p*X,s[5]=h*A+d*P+u*N+p*q,s[9]=h*k+d*W+u*V+p*Z,s[13]=h*S+d*$+u*Y+p*re,s[2]=_*R+g*y+m*L+f*X,s[6]=_*A+g*P+m*N+f*q,s[10]=_*k+g*W+m*V+f*Z,s[14]=_*S+g*$+m*Y+f*re,s[3]=b*R+x*y+M*L+I*X,s[7]=b*A+x*P+M*N+I*q,s[11]=b*k+x*W+M*V+I*Z,s[15]=b*S+x*$+M*Y+I*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*c*d-r*l*d-s*a*u+i*l*u+r*a*p-i*c*p)+g*(+t*c*p-t*l*u+s*o*u-r*o*p+r*l*h-s*c*h)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*h-i*l*h)+f*(-r*a*h-t*c*d+t*a*u+r*o*d-i*o*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],b=d*m*l-g*u*l+g*c*p-a*m*p-d*c*f+a*u*f,x=_*u*l-h*m*l-_*c*p+o*m*p+h*c*f-o*u*f,M=h*g*l-_*d*l+_*a*p-o*g*p-h*a*f+o*d*f,I=_*d*c-h*g*c-_*a*u+o*g*u+h*a*m-o*d*m,R=t*b+i*x+r*M+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(g*u*s-d*m*s-g*r*p+i*m*p+d*r*f-i*u*f)*A,e[2]=(a*m*s-g*c*s+g*r*l-i*m*l-a*r*f+i*c*f)*A,e[3]=(d*c*s-a*u*s-d*r*l+i*u*l+a*r*p-i*c*p)*A,e[4]=x*A,e[5]=(h*m*s-_*u*s+_*r*p-t*m*p-h*r*f+t*u*f)*A,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*f-t*c*f)*A,e[7]=(o*u*s-h*c*s+h*r*l-t*u*l-o*r*p+t*c*p)*A,e[8]=M*A,e[9]=(_*d*s-h*g*s-_*i*p+t*g*p+h*i*f-t*d*f)*A,e[10]=(o*g*s-_*a*s+_*i*l-t*g*l-o*i*f+t*a*f)*A,e[11]=(h*a*s-o*d*s-h*i*l+t*d*l+o*i*p-t*a*p)*A,e[12]=I*A,e[13]=(h*g*r-_*d*r+_*i*u-t*g*u-h*i*m+t*d*m)*A,e[14]=(_*a*r-o*g*r-_*i*c+t*g*c+o*i*m-t*a*m)*A,e[15]=(o*d*r-h*a*r+h*i*c-t*d*c-o*i*u+t*a*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,u=s*l,p=s*h,_=s*d,g=o*h,m=o*d,f=a*d,b=c*l,x=c*h,M=c*d,I=i.x,R=i.y,A=i.z;return r[0]=(1-(g+f))*I,r[1]=(p+M)*I,r[2]=(_-x)*I,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+f))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(_+x)*A,r[9]=(m-b)*A,r[10]=(1-(u+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=_i.set(r[0],r[1],r[2]).length();const o=_i.set(r[4],r[5],r[6]).length(),a=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const l=1/s,h=1/o,d=1/a;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=d,Yt.elements[9]*=d,Yt.elements[10]*=d,t.setFromRotationMatrix(Yt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=_n){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r);let p,_;if(a===_n)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ps)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=_n){const c=this.elements,l=1/(t-e),h=1/(i-r),d=1/(o-s),u=(t+e)*l,p=(i+r)*h;let _,g;if(a===_n)_=(o+s)*d,g=-2*d;else if(a===ps)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _i=new D,Yt=new _t,um=new D(0,0,0),dm=new D(1,1,1),En=new D,Fr=new D,Nt=new D,Vl=new _t,Gl=new ni;class Ts{constructor(e=0,t=0,i=0,r=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const Wl=new D,gi=new ni,cn=new _t,Or=new D,Zi=new D,pm=new D,mm=new ni,Xl=new D(1,0,0),ql=new D(0,1,0),Yl=new D(0,0,1),_m={type:"added"},gm={type:"removed"};class Pt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new D,t=new Ts,i=new ni,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ve}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Xl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return Wl.copy(e).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Zi,Or,this.up):cn.lookAt(Or,Zi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(cn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_m)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new D(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new D,hn=new D,ha=new D,un=new D,xi=new D,vi=new D,Zl=new D,ua=new D,da=new D,fa=new D;let zr=!1;class Ht{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),hn.subVectors(i,t),ha.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(hn),c=Zt.dot(ha),l=hn.dot(hn),h=hn.dot(ha),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,_=(o*h-a*c)*u;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,i,r,s,o,a,c){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,un.x),c.addScaledVector(o,un.y),c.addScaledVector(a,un.z),c)}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),hn.subVectors(e,t),Zt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Zt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Ht.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xi.subVectors(r,i),vi.subVectors(s,i),ua.subVectors(e,i);const c=xi.dot(ua),l=vi.dot(ua);if(c<=0&&l<=0)return t.copy(i);da.subVectors(e,r);const h=xi.dot(da),d=vi.dot(da);if(h>=0&&d<=h)return t.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(xi,o);fa.subVectors(e,s);const p=xi.dot(fa),_=vi.dot(fa);if(_>=0&&p<=_)return t.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(vi,a);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Zl.subVectors(s,r),a=(d-h)/(d-h+(p-_)),t.copy(r).addScaledVector(Zl,a);const f=1/(m+g+u);return o=g*f,a=u*f,t.copy(i).addScaledVector(xi,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=im(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=pa(o,s,e+1/3),this.g=pa(o,s,e),this.b=pa(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=Vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return je.fromWorkingColorSpace(yt.copy(this),e),Math.round(At(yt.r*255,0,255))*65536+Math.round(At(yt.g*255,0,255))*256+Math.round(At(yt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=vt){je.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Br);const i=ea(yn.h,Br.h,t),r=ea(yn.s,Br.s,t),s=ea(yn.l,Br.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ke;Ke.NAMES=Vh;let xm=0;class Er extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Li,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==Oa&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gs extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new D,kr=new ke;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class Gh extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wh extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vm=0;const kt=new _t,ma=new Pt,Si=new D,Ft=new Mr,$i=new Mr,ft=new D;class xn extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Wh:Gh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Ft.min,$i.min),Ft.expandByPoint(ft),ft.addVectors(Ft.max,$i.max),Ft.expandByPoint(ft)):(Ft.expandByPoint($i.min),Ft.expandByPoint($i.max))}Ft.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ft.fromBufferAttribute(a,l),c&&(Si.fromBufferAttribute(e,l),ft.add(Si)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let y=0;y<a;y++)l[y]=new D,h[y]=new D;const d=new D,u=new D,p=new D,_=new ke,g=new ke,m=new ke,f=new D,b=new D;function x(y,P,W){d.fromArray(r,y*3),u.fromArray(r,P*3),p.fromArray(r,W*3),_.fromArray(o,y*2),g.fromArray(o,P*2),m.fromArray(o,W*2),u.sub(d),p.sub(d),g.sub(_),m.sub(_);const $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar($),b.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar($),l[y].add(f),l[P].add(f),l[W].add(f),h[y].add(b),h[P].add(b),h[W].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let y=0,P=M.length;y<P;++y){const W=M[y],$=W.start,L=W.count;for(let N=$,V=$+L;N<V;N+=3)x(i[N+0],i[N+1],i[N+2])}const I=new D,R=new D,A=new D,k=new D;function S(y){A.fromArray(s,y*3),k.copy(A);const P=l[y];I.copy(P),I.sub(A.multiplyScalar(A.dot(P))).normalize(),R.crossVectors(k,P);const $=R.dot(h[y])<0?-1:1;c[y*4]=I.x,c[y*4+1]=I.y,c[y*4+2]=I.z,c[y*4+3]=$}for(let y=0,P=M.length;y<P;++y){const W=M[y],$=W.start,L=W.count;for(let N=$,V=$+L;N<V;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)u[_++]=l[p++]}return new nn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new _t,kn=new no,Hr=new bs,Kl=new D,Mi=new D,Ei=new D,yi=new D,_a=new D,Vr=new D,Gr=new ke,Wr=new ke,Xr=new ke,jl=new D,Jl=new D,Ql=new D,qr=new D,Yr=new D;class $t extends Pt{constructor(e=new xn,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(_a.fromBufferAttribute(d,e),o?Vr.addScaledVector(_a,h):Vr.addScaledVector(_a.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(Hr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Hr,Kl)===null||kn.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&($l.copy(s).invert(),kn.copy(e.ray).applyMatrix4($l),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,I=x;M<I;M+=3){const R=a.getX(M),A=a.getX(M+1),k=a.getX(M+2);r=Zr(this,f,e,i,l,h,d,R,A,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=Zr(this,o,e,i,l,h,d,b,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,I=x;M<I;M+=3){const R=M,A=M+1,k=M+2;r=Zr(this,f,e,i,l,h,d,R,A,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=m,x=m+1,M=m+2;r=Zr(this,o,e,i,l,h,d,b,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Sm(n,e,t,i,r,s,o,a){let c;if(e.side===Rt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Un,a),c===null)return null;Yr.copy(a),Yr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:n}}function Zr(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Mi),n.getVertexPosition(c,Ei),n.getVertexPosition(l,yi);const h=Sm(n,e,t,i,Mi,Ei,yi,qr);if(h){r&&(Gr.fromBufferAttribute(r,a),Wr.fromBufferAttribute(r,c),Xr.fromBufferAttribute(r,l),h.uv=Ht.getInterpolation(qr,Mi,Ei,yi,Gr,Wr,Xr,new ke)),s&&(Gr.fromBufferAttribute(s,a),Wr.fromBufferAttribute(s,c),Xr.fromBufferAttribute(s,l),h.uv1=Ht.getInterpolation(qr,Mi,Ei,yi,Gr,Wr,Xr,new ke),h.uv2=h.uv1),o&&(jl.fromBufferAttribute(o,a),Jl.fromBufferAttribute(o,c),Ql.fromBufferAttribute(o,l),h.normal=Ht.getInterpolation(qr,Mi,Ei,yi,jl,Jl,Ql,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};Ht.getNormal(Mi,Ei,yi,d.normal),h.face=d}return h}class ii extends xn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(d,2));function _(g,m,f,b,x,M,I,R,A,k,S){const y=M/A,P=I/k,W=M/2,$=I/2,L=R/2,N=A+1,V=k+1;let Y=0,X=0;const q=new D;for(let Z=0;Z<V;Z++){const re=Z*P-$;for(let se=0;se<N;se++){const G=se*y-W;q[g]=G*b,q[m]=re*x,q[f]=L,l.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[f]=R>0?1:-1,h.push(q.x,q.y,q.z),d.push(se/A),d.push(1-Z/k),Y+=1}}for(let Z=0;Z<k;Z++)for(let re=0;re<A;re++){const se=u+re+N*Z,G=u+re+N*(Z+1),K=u+(re+1)+N*(Z+1),ce=u+(re+1)+N*Z;c.push(se,G,ce),c.push(G,K,ce),X+=6}a.addGroup(p,X,S),p+=X,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=zi(n[t]);for(const r in i)e[r]=i[r]}return e}function Mm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xh(n){return n.getRenderTarget()===null?n.outputColorSpace:je.workingColorSpace}const Em={clone:zi,merge:Tt};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qh extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends qh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,Ti=1;class Tm extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(bi,Ti,e,t);r.layers=this.layers,this.add(r);const s=new Vt(bi,Ti,e,t);s.layers=this.layers,this.add(s);const o=new Vt(bi,Ti,e,t);o.layers=this.layers,this.add(o);const a=new Vt(bi,Ti,e,t);a.layers=this.layers,this.add(a);const c=new Vt(bi,Ti,e,t);c.layers=this.layers,this.add(c);const l=new Vt(bi,Ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Yh extends Dt{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Am extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===jn?vt:Wt),this.texture=new Yh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ii(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Dn});s.uniforms.tEquirect.value=t;const o=new $t(r,s),a=t.minFilter;return t.minFilter===ur&&(t.minFilter=mt),new Tm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ga=new D,wm=new D,Rm=new Ve;class bn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ga.subVectors(i,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ga),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rm.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new bs,$r=new D;class Zh{constructor(e=new bn,t=new bn,i=new bn,r=new bn,s=new bn,o=new bn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],d=r[6],u=r[7],p=r[8],_=r[9],g=r[10],m=r[11],f=r[12],b=r[13],x=r[14],M=r[15];if(i[0].setComponents(c-s,u-l,m-p,M-f).normalize(),i[1].setComponents(c+s,u+l,m+p,M+f).normalize(),i[2].setComponents(c+o,u+h,m+_,M+b).normalize(),i[3].setComponents(c-o,u-h,m-_,M-b).normalize(),i[4].setComponents(c-a,u-d,m-g,M-x).normalize(),t===_n)i[5].setComponents(c+a,u+d,m+g,M+x).normalize();else if(t===ps)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($r.x=r.normal.x>0?e.max.x:e.min.x,$r.y=r.normal.y>0?e.max.y:e.min.y,$r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $h(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,h){const d=l.array,u=l.usage,p=d.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,h,d){const u=h.array,p=h._updateRange,_=h.updateRanges;if(n.bindBuffer(d,l),p.count===-1&&_.length===0&&n.bufferSubData(d,0,u),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=i.get(l);(!u||u.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);if(d===void 0)i.set(l,r(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class fr extends xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,d=e/a,u=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const b=f*u-o;for(let x=0;x<l;x++){const M=x*d-s;_.push(M,-b,0),g.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const x=b+l*f,M=b+l*(f+1),I=b+1+l*(f+1),R=b+1+l*f;p.push(x,M,R),p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,F_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,X_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Im,alphahash_pars_fragment:Lm,alphamap_fragment:Dm,alphamap_pars_fragment:Pm,alphatest_fragment:Um,alphatest_pars_fragment:Nm,aomap_fragment:Fm,aomap_pars_fragment:Om,batching_pars_vertex:zm,batching_vertex:Bm,begin_vertex:km,beginnormal_vertex:Hm,bsdfs:Vm,iridescence_fragment:Gm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:Zm,color_fragment:$m,color_pars_fragment:Km,color_pars_vertex:jm,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:r_,emissivemap_pars_fragment:s_,colorspace_fragment:a_,colorspace_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:h_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:y_,envmap_vertex:d_,fog_vertex:f_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:__,gradientmap_pars_fragment:g_,lightmap_fragment:x_,lightmap_pars_fragment:v_,lights_lambert_fragment:S_,lights_lambert_pars_fragment:M_,lights_pars_begin:E_,lights_toon_fragment:b_,lights_toon_pars_fragment:T_,lights_phong_fragment:A_,lights_phong_pars_fragment:w_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:I_,lights_fragment_maps:L_,lights_fragment_end:D_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:F_,map_fragment:O_,map_pars_fragment:z_,map_particle_fragment:B_,map_particle_pars_fragment:k_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:V_,morphcolor_vertex:G_,morphnormal_vertex:W_,morphtarget_pars_vertex:X_,morphtarget_vertex:q_,normal_fragment_begin:Y_,normal_fragment_maps:Z_,normal_pars_fragment:$_,normal_pars_vertex:K_,normal_vertex:j_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:Q_,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:rg,premultiplied_alpha_fragment:sg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:_g,skinning_vertex:gg,skinnormal_vertex:xg,specularmap_fragment:vg,specularmap_pars_fragment:Sg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Eg,transmission_fragment:yg,transmission_pars_fragment:bg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:wg,worldpos_vertex:Rg,background_vert:Cg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Pg,cube_frag:Ug,depth_vert:Ng,depth_frag:Fg,distanceRGBA_vert:Og,distanceRGBA_frag:zg,equirect_vert:Bg,equirect_frag:kg,linedashed_vert:Hg,linedashed_frag:Vg,meshbasic_vert:Gg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Zg,meshnormal_vert:$g,meshnormal_frag:Kg,meshphong_vert:jg,meshphong_frag:Jg,meshphysical_vert:Qg,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:n0,points_vert:i0,points_frag:r0,shadow_vert:s0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Jt={basic:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Tt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Tt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Tt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Tt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Tt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Tt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Tt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Tt([ae.lights,ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Jt.physical={uniforms:Tt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Kr={r:0,b:0,g:0};function c0(n,e,t,i,r,s,o){const a=new Ke(0);let c=s===!0?0:1,l,h,d=null,u=0,p=null;function _(m,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,c):x&&x.isColor&&(g(x,1),b=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ms)?(h===void 0&&(h=new $t(new ii(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:zi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=je.getTransfer(x.colorSpace)!==et,(d!==x||u!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $t(new fr(2,2),new Nn({name:"BackgroundMaterial",uniforms:zi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){m.getRGB(Kr,Xh(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function h0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null);let l=c,h=!1;function d(L,N,V,Y,X){let q=!1;if(o){const Z=g(Y,V,N);l!==Z&&(l=Z,p(l.object)),q=f(L,Y,V,X),q&&b(L,Y,V,X)}else{const Z=N.wireframe===!0;(l.geometry!==Y.id||l.program!==V.id||l.wireframe!==Z)&&(l.geometry=Y.id,l.program=V.id,l.wireframe=Z,q=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,k(L,N,V,Y),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,N,V){const Y=V.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let q=X[N.id];q===void 0&&(q={},X[N.id]=q);let Z=q[Y];return Z===void 0&&(Z=m(u()),q[Y]=Z),Z}function m(L){const N=[],V=[],Y=[];for(let X=0;X<r;X++)N[X]=0,V[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,N,V,Y){const X=l.attributes,q=N.attributes;let Z=0;const re=V.getAttributes();for(const se in re)if(re[se].location>=0){const K=X[se];let ce=q[se];if(ce===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;Z++}return l.attributesNum!==Z||l.index!==Y}function b(L,N,V,Y){const X={},q=N.attributes;let Z=0;const re=V.getAttributes();for(const se in re)if(re[se].location>=0){let K=q[se];K===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),X[se]=ce,Z++}l.attributes=X,l.attributesNum=Z,l.index=Y}function x(){const L=l.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function M(L){I(L,0)}function I(L,N){const V=l.newAttributes,Y=l.enabledAttributes,X=l.attributeDivisors;V[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),X[L]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function R(){const L=l.newAttributes,N=l.enabledAttributes;for(let V=0,Y=N.length;V<Y;V++)N[V]!==L[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function A(L,N,V,Y,X,q,Z){Z===!0?n.vertexAttribIPointer(L,N,V,X,q):n.vertexAttribPointer(L,N,V,Y,X,q)}function k(L,N,V,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=Y.attributes,q=V.getAttributes(),Z=N.defaultAttributeValues;for(const re in q){const se=q[re];if(se.location>=0){let G=X[re];if(G===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const K=G.normalized,ce=G.itemSize,ve=t.get(G);if(ve===void 0)continue;const ge=ve.buffer,Le=ve.type,De=ve.bytesPerElement,Te=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||G.gpuType===Rh);if(G.isInterleavedBufferAttribute){const Ge=G.data,O=Ge.stride,gt=G.offset;if(Ge.isInstancedInterleavedBuffer){for(let Ee=0;Ee<se.locationSize;Ee++)I(se.location+Ee,Ge.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Ee=0;Ee<se.locationSize;Ee++)M(se.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ee=0;Ee<se.locationSize;Ee++)A(se.location+Ee,ce/se.locationSize,Le,K,O*De,(gt+ce/se.locationSize*Ee)*De,Te)}else{if(G.isInstancedBufferAttribute){for(let Ge=0;Ge<se.locationSize;Ge++)I(se.location+Ge,G.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ge=0;Ge<se.locationSize;Ge++)M(se.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ge=0;Ge<se.locationSize;Ge++)A(se.location+Ge,ce/se.locationSize,Le,K,ce*De,ce/se.locationSize*Ge*De,Te)}}else if(Z!==void 0){const K=Z[re];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(se.location,K);break;case 3:n.vertexAttrib3fv(se.location,K);break;case 4:n.vertexAttrib4fv(se.location,K);break;default:n.vertexAttrib1fv(se.location,K)}}}}R()}function S(){W();for(const L in a){const N=a[L];for(const V in N){const Y=N[V];for(const X in Y)_(Y[X].object),delete Y[X];delete N[V]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const V in N){const Y=N[V];for(const X in Y)_(Y[X].object),delete Y[X];delete N[V]}delete a[L.id]}function P(L){for(const N in a){const V=a[N];if(V[L.id]===void 0)continue;const Y=V[L.id];for(const X in Y)_(Y[X].object),delete Y[X];delete V[L.id]}}function W(){$(),h=!0,l!==c&&(l=c,p(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function u0(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,d){n.drawArrays(s,h,d),t.update(d,s,1)}function c(h,d,u){if(u===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,h,d,u),t.update(d,s,u)}function l(h,d,u){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u;_++)this.render(h[_],d[_]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function d0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=o||e.has("OES_texture_float"),I=x&&M,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:R}}function f0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new bn,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const b=s?0:i,x=b*4;let M=f.clippingState||null;c.value=M,M=h(_,u,x,p);for(let I=0;I!==x;++I)M[I]=t[I];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=p;x!==g;++x,M+=4)o.copy(d[x]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function p0(n){let e=new WeakMap;function t(o,a){return a===za?o.mapping=Ni:a===Ba&&(o.mapping=Fi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===Ba)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Am(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kh extends qh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,ec=[.125,.215,.35,.446,.526,.582],Wn=20,xa=new Kh,tc=new Ke;let va=null,Sa=0,Ma=0;const Vn=(1+Math.sqrt(5))/2,Ai=1/Vn,nc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Vn,Ai),new D(0,Vn,-Ai),new D(Ai,0,Vn),new D(-Ai,0,Vn),new D(Vn,Ai,0),new D(-Vn,Ai,0)];class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){va=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,Sa,Ma),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:dr,format:bt,colorSpace:gn,depthBuffer:!1},r=rc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=_0(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,r){const a=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(tc),h.toneMapping=Pn,h.autoClear=!1;const p=new gs({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new $t(new ii,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(tc),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;jr(r,b*x,f>2?x:0,x,x),h.setRenderTarget(r),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ni||e.mapping===Fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;jr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nc[(r-1)%nc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $t(this._lodPlanes[r],l),u=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const f=[];let b=0;for(let A=0;A<Wn;++A){const k=A/g,S=Math.exp(-k*k/2);f.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;const M=this._sizeLods[r],I=3*M*(r>x-Ri?r-x+Ri:0),R=4*(this._cubeSize-M);jr(t,I,R,3*M,2*M),c.setRenderTarget(t),c.render(d,xa)}}function m0(n){const e=[],t=[],i=[];let r=n;const s=n-Ri+1+ec.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ri?c=ec[o-n+Ri-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,g=3,m=2,f=1,b=new Float32Array(g*_*p),x=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,k=R>2?0:-1,S=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];b.set(S,g*_*R),x.set(u,m*_*R);const y=[R,R,R,R,R,R];M.set(y,f*_*R)}const I=new xn;I.setAttribute("position",new nn(b,g)),I.setAttribute("uv",new nn(x,m)),I.setAttribute("faceIndex",new nn(M,f)),e.push(I),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rc(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=Ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _0(n,e,t){const i=new Float32Array(Wn),r=new D(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function sc(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ac(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===za||c===Ba,h=c===Ni||c===Fi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ic(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new ic(n));const u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function x0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function v0(n,e,t,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)e.update(u[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let x=0,M=b.length;x<M;x+=3){const I=b[x+0],R=b[x+1],A=b[x+2];u.push(I,R,R,A,A,I)}}else if(_!==void 0){const b=_.array;g=_.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const I=x+0,R=x+1,A=x+2;u.push(I,R,R,A,A,I)}}else return;const m=new(Oh(u)?Wh:Gh)(u,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function S0(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,_){n.drawElements(s,_,a,p*c),t.update(_,s,1)}function d(p,_,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,a,p*c,g),t.update(_,s,g)}function u(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/c,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let f=0;for(let b=0;b<g;b++)f+=_[b];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function M0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function E0(n,e){return n[0]-e[0]}function y0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function b0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(h);if(m===void 0||m.count!==g){let N=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),I===!0&&(S=3);let y=h.attributes.position.count*S,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const W=new Float32Array(y*P*4*g),$=new kh(W,y,P,g);$.type=Rn,$.needsUpdate=!0;const L=S*4;for(let V=0;V<g;V++){const Y=R[V],X=A[V],q=k[V],Z=y*P*4*V;for(let re=0;re<Y.count;re++){const se=re*L;x===!0&&(o.fromBufferAttribute(Y,re),W[Z+se+0]=o.x,W[Z+se+1]=o.y,W[Z+se+2]=o.z,W[Z+se+3]=0),M===!0&&(o.fromBufferAttribute(X,re),W[Z+se+4]=o.x,W[Z+se+5]=o.y,W[Z+se+6]=o.z,W[Z+se+7]=0),I===!0&&(o.fromBufferAttribute(q,re),W[Z+se+8]=o.x,W[Z+se+9]=o.y,W[Z+se+10]=o.z,W[Z+se+11]=q.itemSize===4?o.w:1)}}m={count:g,texture:$,size:new ke(y,P)},s.set(h,m),h.addEventListener("dispose",N)}let f=0;for(let x=0;x<u.length;x++)f+=u[x];const b=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",u),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=u===void 0?0:u.length;let g=i[h.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];i[h.id]=g}for(let M=0;M<_;M++){const I=g[M];I[0]=M,I[1]=u[M]}g.sort(y0);for(let M=0;M<8;M++)M<_&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(E0);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const I=a[M],R=I[0],A=I[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+M)!==m[R]&&h.setAttribute("morphTarget"+M,m[R]),f&&h.getAttribute("morphNormal"+M)!==f[R]&&h.setAttribute("morphNormal"+M,f[R]),r[M]=A,b+=A):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const x=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function T0(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class jh extends Dt{constructor(e,t,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Kn&&(i=wn),i===void 0&&h===Oi&&(i=$n),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jh=new Dt,Qh=new jh(1,1);Qh.compareFunction=Fh;const eu=new kh,tu=new _s,nu=new Yh,oc=[],lc=[],cc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function Vi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=oc[r];if(s===void 0&&(s=new Float32Array(r),oc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function As(n,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function I0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;uc.set(i),n.uniformMatrix2fv(this.addr,!1,uc),ut(t,i)}}function L0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;hc.set(i),n.uniformMatrix3fv(this.addr,!1,hc),ut(t,i)}}function D0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;cc.set(i),n.uniformMatrix4fv(this.addr,!1,cc),ut(t,i)}}function P0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function O0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function H0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Qh:Jh;t.setTexture2D(e||s,r)}function V0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||tu,r)}function G0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||nu,r)}function W0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||eu,r)}function X0(n){switch(n){case 5126:return A0;case 35664:return w0;case 35665:return R0;case 35666:return C0;case 35674:return I0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return P0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return z0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(n,e){n.uniform1fv(this.addr,e)}function Y0(n,e){const t=Vi(e,this.size,2);n.uniform2fv(this.addr,t)}function Z0(n,e){const t=Vi(e,this.size,3);n.uniform3fv(this.addr,t)}function $0(n,e){const t=Vi(e,this.size,4);n.uniform4fv(this.addr,t)}function K0(n,e){const t=Vi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function j0(n,e){const t=Vi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J0(n,e){const t=Vi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q0(n,e){n.uniform1iv(this.addr,e)}function ex(n,e){n.uniform2iv(this.addr,e)}function tx(n,e){n.uniform3iv(this.addr,e)}function nx(n,e){n.uniform4iv(this.addr,e)}function ix(n,e){n.uniform1uiv(this.addr,e)}function rx(n,e){n.uniform2uiv(this.addr,e)}function sx(n,e){n.uniform3uiv(this.addr,e)}function ax(n,e){n.uniform4uiv(this.addr,e)}function ox(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jh,s[o])}function lx(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||tu,s[o])}function cx(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||nu,s[o])}function hx(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||eu,s[o])}function ux(n){switch(n){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return $0;case 35674:return K0;case 35675:return j0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return rx;case 36295:return sx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}class dx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}}class fx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ux(t.type)}}class px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function dc(n,e){n.seq.push(e),n.map[e.id]=e}function mx(n,e,t){const i=n.name,r=i.length;for(Ea.lastIndex=0;;){const s=Ea.exec(i),o=Ea.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){dc(t,l===void 0?new dx(a,n,e):new fx(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new px(a),dc(t,d)),t=d}}}class ss{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function fc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _x=37297;let gx=0;function xx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function vx(n){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(n);let i;switch(e===t?i="":e===fs&&t===ds?i="LinearDisplayP3ToLinearSRGB":e===ds&&t===fs&&(i="LinearSRGBToLinearDisplayP3"),n){case gn:case ys:return[i,"LinearTransferOETF"];case vt:case to:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xx(n.getShaderSource(e),o)}else return r}function Sx(n,e){const t=vx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mx(n,e){let t;switch(e){case Dp:t="Linear";break;case Pp:t="Reinhard";break;case Up:t="OptimizedCineon";break;case Np:t="ACESFilmic";break;case Op:t="AgX";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ex(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function yx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ci).join(`
`)}function bx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ci(n){return n!==""}function mc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(n){return n.replace(Ax,Rx)}const wx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rx(n,e){let t=Oe[e];if(t===void 0){const i=wx.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xa(t)}const Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(n){return n.replace(Cx,Ix)}function Ix(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ni:case Fi:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Px(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ux(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ah:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case Lp:e="ENVMAP_BLENDING_ADD";break}return e}function Nx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Fx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Lx(t),l=Dx(t),h=Px(t),d=Ux(t),u=Nx(t),p=t.isWebGL2?"":Ex(t),_=yx(t),g=bx(s),m=r.createProgram();let f,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ci).join(`
`),f.length>0&&(f+=`
`),b=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ci).join(`
`),b.length>0&&(b+=`
`)):(f=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),b=[p,xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Sx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),o=Xa(o),o=mc(o,t),o=_c(o,t),a=Xa(a),a=mc(a,t),a=_c(a,t),o=gc(o),a=gc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const M=x+f+o,I=x+b+a,R=fc(r,r.VERTEX_SHADER,M),A=fc(r,r.FRAGMENT_SHADER,I);r.attachShader(m,R),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function k(W){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(R).trim(),N=r.getShaderInfoLog(A).trim();let V=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,A);else{const X=pc(r,R,"vertex"),q=pc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+X+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||N==="")&&(Y=!1);Y&&(W.diagnostics={runnable:V,programLog:$,vertexShader:{log:L,prefix:f},fragmentShader:{log:N,prefix:b}})}r.deleteShader(R),r.deleteShader(A),S=new ss(r,m),y=Tx(r,m)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let y;this.getAttributes=function(){return y===void 0&&k(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(m,_x)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let Ox=0;class zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Bx(e),t.set(e,i)),i}}class Bx{constructor(e){this.id=Ox++,this.code=e,this.usedTimes=0}}function kx(n,e,t,i,r,s,o){const a=new Hh,c=new zx,l=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,y,P,W,$){const L=W.fog,N=$.geometry,V=S.isMeshStandardMaterial?W.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),X=Y&&Y.mapping===Ms?Y.image.height:null,q=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=Z!==void 0?Z.length:0;let se=0;N.morphAttributes.position!==void 0&&(se=1),N.morphAttributes.normal!==void 0&&(se=2),N.morphAttributes.color!==void 0&&(se=3);let G,K,ce,ve;if(q){const at=Jt[q];G=at.vertexShader,K=at.fragmentShader}else G=S.vertexShader,K=S.fragmentShader,c.update(S),ce=c.getVertexShaderID(S),ve=c.getFragmentShaderID(S);const ge=n.getRenderTarget(),Le=$.isInstancedMesh===!0,De=$.isBatchedMesh===!0,Te=!!S.map,Ge=!!S.matcap,O=!!Y,gt=!!S.aoMap,Ee=!!S.lightMap,Re=!!S.bumpMap,me=!!S.normalMap,Qe=!!S.displacementMap,Ue=!!S.emissiveMap,T=!!S.metalnessMap,v=!!S.roughnessMap,F=S.anisotropy>0,ee=S.clearcoat>0,J=S.iridescence>0,te=S.sheen>0,_e=S.transmission>0,le=F&&!!S.anisotropyMap,fe=ee&&!!S.clearcoatMap,be=ee&&!!S.clearcoatNormalMap,Ne=ee&&!!S.clearcoatRoughnessMap,j=J&&!!S.iridescenceMap,Ze=J&&!!S.iridescenceThicknessMap,ze=te&&!!S.sheenColorMap,Ce=te&&!!S.sheenRoughnessMap,Me=!!S.specularMap,he=!!S.specularColorMap,w=!!S.specularIntensityMap,ne=_e&&!!S.transmissionMap,xe=_e&&!!S.thicknessMap,de=!!S.gradientMap,Q=!!S.alphaMap,C=S.alphaTest>0,ie=!!S.alphaHash,oe=!!S.extensions,Ae=!!N.attributes.uv1,ye=!!N.attributes.uv2,We=!!N.attributes.uv3;let Xe=Pn;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Xe=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:Le,instancingColor:Le&&$.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:gn,map:Te,matcap:Ge,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:X,aoMap:gt,lightMap:Ee,bumpMap:Re,normalMap:me,displacementMap:u&&Qe,emissiveMap:Ue,normalMapObjectSpace:me&&S.normalMapType===$p,normalMapTangentSpace:me&&S.normalMapType===Zp,metalnessMap:T,roughnessMap:v,anisotropy:F,anisotropyMap:le,clearcoat:ee,clearcoatMap:fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ne,iridescence:J,iridescenceMap:j,iridescenceThicknessMap:Ze,sheen:te,sheenColorMap:ze,sheenRoughnessMap:Ce,specularMap:Me,specularColorMap:he,specularIntensityMap:w,transmission:_e,transmissionMap:ne,thicknessMap:xe,gradientMap:de,opaque:S.transparent===!1&&S.blending===Li,alphaMap:Q,alphaTest:C,alphaHash:ie,combine:S.combine,mapUv:Te&&g(S.map.channel),aoMapUv:gt&&g(S.aoMap.channel),lightMapUv:Ee&&g(S.lightMap.channel),bumpMapUv:Re&&g(S.bumpMap.channel),normalMapUv:me&&g(S.normalMap.channel),displacementMapUv:Qe&&g(S.displacementMap.channel),emissiveMapUv:Ue&&g(S.emissiveMap.channel),metalnessMapUv:T&&g(S.metalnessMap.channel),roughnessMapUv:v&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:fe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(S.sheenRoughnessMap.channel),specularMapUv:Me&&g(S.specularMap.channel),specularColorMapUv:he&&g(S.specularColorMap.channel),specularIntensityMapUv:w&&g(S.specularIntensityMap.channel),transmissionMapUv:ne&&g(S.transmissionMap.channel),thicknessMapUv:xe&&g(S.thicknessMap.channel),alphaMapUv:Q&&g(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(me||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:ye,vertexUv3s:We,pointsUvs:$.isPoints===!0&&!!N.attributes.uv&&(Te||Q),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(y,S),x(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const y=_[S.type];let P;if(y){const W=Jt[y];P=Em.clone(W.uniforms)}else P=S.uniforms;return P}function I(S,y){let P;for(let W=0,$=l.length;W<$;W++){const L=l[W];if(L.cacheKey===y){P=L,++P.usedTimes;break}}return P===void 0&&(P=new Fx(n,y,S,s),l.push(P)),P}function R(S){if(--S.usedTimes===0){const y=l.indexOf(S);l[y]=l[l.length-1],l.pop(),S.destroy()}}function A(S){c.remove(S)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:k}}function Hx(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,u,p,_,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,u,p,_,g,m){const f=o(d,u,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(d,u,p,_,g,m){const f=o(d,u,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,u){t.length>1&&t.sort(d||Vx),i.length>1&&i.sort(u||vc),r.length>1&&r.sort(u||vc)}function h(){for(let d=e,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Gx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Sc,n.set(i,[o])):r>=s.length?(o=new Sc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ke};break;case"SpotLight":t={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qx=0;function Yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Zx(n,e){const t=new Wx,i=Xx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new D);const s=new D,o=new _t,a=new _t;function c(h,d){let u=0,p=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let g=0,m=0,f=0,b=0,x=0,M=0,I=0,R=0,A=0,k=0,S=0;h.sort(Yx);const y=d===!0?Math.PI:1;for(let W=0,$=h.length;W<$;W++){const L=h[W],N=L.color,V=L.intensity,Y=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*V*y,p+=N.g*V*y,_+=N.b*V*y;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],V);S++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const Z=L.shadow,re=i.get(L);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,r.directionalShadow[g]=re,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=L.shadow.matrix,M++}r.directional[g]=q,g++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(V*y),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[f]=q;const Z=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,Z.updateMatrices(L),L.castShadow&&k++),r.spotLightMatrix[f]=Z.matrix,L.castShadow){const re=i.get(L);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,r.spotShadow[f]=re,r.spotShadowMap[f]=X,R++}f++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(N).multiplyScalar(V),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[b]=q,b++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*y),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Z=L.shadow,re=i.get(L);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,re.shadowCameraNear=Z.camera.near,re.shadowCameraFar=Z.camera.far,r.pointShadow[m]=re,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=L.shadow.matrix,I++}r.point[m]=q,m++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(V*y),q.groundColor.copy(L.groundColor).multiplyScalar(V*y),r.hemi[x]=q,x++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=_;const P=r.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==f||P.rectAreaLength!==b||P.hemiLength!==x||P.numDirectionalShadows!==M||P.numPointShadows!==I||P.numSpotShadows!==R||P.numSpotMaps!==A||P.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=b,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+A-k,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=S,P.directionalLength=g,P.pointLength=m,P.spotLength=f,P.rectAreaLength=b,P.hemiLength=x,P.numDirectionalShadows=M,P.numPointShadows=I,P.numSpotShadows=R,P.numSpotMaps=A,P.numLightProbes=S,r.version=qx++)}function l(h,d){let u=0,p=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const M=h[b];if(M.isDirectionalLight){const I=r.directional[u];I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),u++}else if(M.isSpotLight){const I=r.spot[_];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const I=r.rectArea[g];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const I=r.point[p];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const I=r.hemi[m];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:r}}function Mc(n,e){const t=new Zx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function $x(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Mc(n,e),t.set(s,[c])):o>=a.length?(c=new Mc(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Kx extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jx extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ev(n,e,t){let i=new Zh;const r=new ke,s=new ke,o=new St,a=new Kx({depthPacking:Yp}),c=new jx,l={},h=t.maxTextureSize,d={[Un]:Rt,[Rt]:Un,[mn]:mn},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Jx,fragmentShader:Qx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let f=this.type;this.render=function(R,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Dn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const $=f!==dn&&this.type===dn,L=f===dn&&this.type!==dn;for(let N=0,V=R.length;N<V;N++){const Y=R[N],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const q=X.getFrameExtents();if(r.multiply(q),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,X.mapSize.y=s.y)),X.map===null||$===!0||L===!0){const re=this.type!==dn?{minFilter:Je,magFilter:Je}:{};X.map!==null&&X.map.dispose(),X.map=new ti(r.x,r.y,re),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Z=X.getViewportCount();for(let re=0;re<Z;re++){const se=X.getViewport(re);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),W.viewport(o),X.updateMatrices(Y,re),i=X.getFrustum(),M(A,k,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===dn&&b(X,k),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,P)};function b(R,A){const k=e.update(g);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,k,u,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,k,p,g,null)}function x(R,A,k,S){let y=null;const P=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)y=P;else if(y=k.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=y.uuid,$=A.uuid;let L=l[W];L===void 0&&(L={},l[W]=L);let N=L[$];N===void 0&&(N=y.clone(),L[$]=N,A.addEventListener("dispose",I)),y=N}if(y.visible=A.visible,y.wireframe=A.wireframe,S===dn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=n.properties.get(y);W.light=k}return y}function M(R,A,k,S,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===dn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);const $=e.update(R),L=R.material;if(Array.isArray(L)){const N=$.groups;for(let V=0,Y=N.length;V<Y;V++){const X=N[V],q=L[X.materialIndex];if(q&&q.visible){const Z=x(R,q,S,y);R.onBeforeShadow(n,R,A,k,$,Z,X),n.renderBufferDirect(k,null,$,Z,R,X),R.onAfterShadow(n,R,A,k,$,Z,X)}}}else if(L.visible){const N=x(R,L,S,y);R.onBeforeShadow(n,R,A,k,$,N,null),n.renderBufferDirect(k,null,$,N,R,null),R.onAfterShadow(n,R,A,k,$,N,null)}}const W=R.children;for(let $=0,L=W.length;$<L;$++)M(W[$],A,k,S,y)}function I(R){R.target.removeEventListener("dispose",I);for(const k in l){const S=l[k],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function tv(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const ie=new St;let oe=null;const Ae=new St(0,0,0,0);return{setMask:function(ye){oe!==ye&&!C&&(n.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){C=ye},setClear:function(ye,We,Xe,rt,at){at===!0&&(ye*=rt,We*=rt,Xe*=rt),ie.set(ye,We,Xe,rt),Ae.equals(ie)===!1&&(n.clearColor(ye,We,Xe,rt),Ae.copy(ie))},reset:function(){C=!1,oe=null,Ae.set(-1,0,0,0)}}}function s(){let C=!1,ie=null,oe=null,Ae=null;return{setTest:function(ye){ye?De(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ye){ie!==ye&&!C&&(n.depthMask(ye),ie=ye)},setFunc:function(ye){if(oe!==ye){switch(ye){case yp:n.depthFunc(n.NEVER);break;case bp:n.depthFunc(n.ALWAYS);break;case Tp:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Ap:n.depthFunc(n.EQUAL);break;case wp:n.depthFunc(n.GEQUAL);break;case Rp:n.depthFunc(n.GREATER);break;case Cp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=ye}},setLocked:function(ye){C=ye},setClear:function(ye){Ae!==ye&&(n.clearDepth(ye),Ae=ye)},reset:function(){C=!1,ie=null,oe=null,Ae=null}}}function o(){let C=!1,ie=null,oe=null,Ae=null,ye=null,We=null,Xe=null,rt=null,at=null;return{setTest:function(Ye){C||(Ye?De(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Ye){ie!==Ye&&!C&&(n.stencilMask(Ye),ie=Ye)},setFunc:function(Ye,lt,Kt){(oe!==Ye||Ae!==lt||ye!==Kt)&&(n.stencilFunc(Ye,lt,Kt),oe=Ye,Ae=lt,ye=Kt)},setOp:function(Ye,lt,Kt){(We!==Ye||Xe!==lt||rt!==Kt)&&(n.stencilOp(Ye,lt,Kt),We=Ye,Xe=lt,rt=Kt)},setLocked:function(Ye){C=Ye},setClear:function(Ye){at!==Ye&&(n.clearStencil(Ye),at=Ye)},reset:function(){C=!1,ie=null,oe=null,Ae=null,ye=null,We=null,Xe=null,rt=null,at=null}}}const a=new r,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},p={},_=new WeakMap,g=[],m=null,f=!1,b=null,x=null,M=null,I=null,R=null,A=null,k=null,S=new Ke(0,0,0),y=0,P=!1,W=null,$=null,L=null,N=null,V=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=q>=2);let re=null,se={};const G=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ce=new St().fromArray(G),ve=new St().fromArray(K);function ge(C,ie,oe,Ae){const ye=new Uint8Array(4),We=n.createTexture();n.bindTexture(C,We),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<oe;Xe++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(ie,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ie+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return We}const Le={};Le[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(n.DEPTH_TEST),c.setFunc(cs),Ue(!1),T(nl),De(n.CULL_FACE),me(Dn);function De(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function Te(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Ge(C,ie){return p[C]!==ie?(n.bindFramebuffer(C,ie),p[C]=ie,i&&(C===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ie),C===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ie)),!0):!1}function O(C,ie){let oe=g,Ae=!1;if(C)if(oe=_.get(ie),oe===void 0&&(oe=[],_.set(ie,oe)),C.isWebGLMultipleRenderTargets){const ye=C.texture;if(oe.length!==ye.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let We=0,Xe=ye.length;We<Xe;We++)oe[We]=n.COLOR_ATTACHMENT0+We;oe.length=ye.length,Ae=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Ae=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function gt(C){return m!==C?(n.useProgram(C),m=C,!0):!1}const Ee={[Gn]:n.FUNC_ADD,[lp]:n.FUNC_SUBTRACT,[cp]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[al]=n.MIN,Ee[ol]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Ee[al]=C.MIN_EXT,Ee[ol]=C.MAX_EXT)}const Re={[hp]:n.ZERO,[up]:n.ONE,[dp]:n.SRC_COLOR,[Fa]:n.SRC_ALPHA,[xp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[pp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[Oa]:n.ONE_MINUS_SRC_ALPHA,[gp]:n.ONE_MINUS_DST_COLOR,[mp]:n.ONE_MINUS_DST_ALPHA,[vp]:n.CONSTANT_COLOR,[Sp]:n.ONE_MINUS_CONSTANT_COLOR,[Mp]:n.CONSTANT_ALPHA,[Ep]:n.ONE_MINUS_CONSTANT_ALPHA};function me(C,ie,oe,Ae,ye,We,Xe,rt,at,Ye){if(C===Dn){f===!0&&(Te(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),C!==op){if(C!==b||Ye!==P){if((x!==Gn||R!==Gn)&&(n.blendEquation(n.FUNC_ADD),x=Gn,R=Gn),Ye)switch(C){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.ONE,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,I=null,A=null,k=null,S.set(0,0,0),y=0,b=C,P=Ye}return}ye=ye||ie,We=We||oe,Xe=Xe||Ae,(ie!==x||ye!==R)&&(n.blendEquationSeparate(Ee[ie],Ee[ye]),x=ie,R=ye),(oe!==M||Ae!==I||We!==A||Xe!==k)&&(n.blendFuncSeparate(Re[oe],Re[Ae],Re[We],Re[Xe]),M=oe,I=Ae,A=We,k=Xe),(rt.equals(S)===!1||at!==y)&&(n.blendColor(rt.r,rt.g,rt.b,at),S.copy(rt),y=at),b=C,P=!1}function Qe(C,ie){C.side===mn?Te(n.CULL_FACE):De(n.CULL_FACE);let oe=C.side===Rt;ie&&(oe=!oe),Ue(oe),C.blending===Li&&C.transparent===!1?me(Dn):me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const Ae=C.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(C){W!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),W=C)}function T(C){C!==rp?(De(n.CULL_FACE),C!==$&&(C===nl?n.cullFace(n.BACK):C===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),$=C}function v(C){C!==L&&(X&&n.lineWidth(C),L=C)}function F(C,ie,oe){C?(De(n.POLYGON_OFFSET_FILL),(N!==ie||V!==oe)&&(n.polygonOffset(ie,oe),N=ie,V=oe)):Te(n.POLYGON_OFFSET_FILL)}function ee(C){C?De(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function J(C){C===void 0&&(C=n.TEXTURE0+Y-1),re!==C&&(n.activeTexture(C),re=C)}function te(C,ie,oe){oe===void 0&&(re===null?oe=n.TEXTURE0+Y-1:oe=re);let Ae=se[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},se[oe]=Ae),(Ae.type!==C||Ae.texture!==ie)&&(re!==oe&&(n.activeTexture(oe),re=oe),n.bindTexture(C,ie||Le[C]),Ae.type=C,Ae.texture=ie)}function _e(){const C=se[re];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ze(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function w(C){ce.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function ne(C){ve.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function xe(C,ie){let oe=d.get(ie);oe===void 0&&(oe=new WeakMap,d.set(ie,oe));let Ae=oe.get(C);Ae===void 0&&(Ae=n.getUniformBlockIndex(ie,C.name),oe.set(C,Ae))}function de(C,ie){const Ae=d.get(ie).get(C);h.get(ie)!==Ae&&(n.uniformBlockBinding(ie,Ae,C.__bindingPointIndex),h.set(ie,Ae))}function Q(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,se={},p={},_=new WeakMap,g=[],m=null,f=!1,b=null,x=null,M=null,I=null,R=null,A=null,k=null,S=new Ke(0,0,0),y=0,P=!1,W=null,$=null,L=null,N=null,V=null,ce.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:Te,bindFramebuffer:Ge,drawBuffers:O,useProgram:gt,setBlending:me,setMaterial:Qe,setFlipSided:Ue,setCullFace:T,setLineWidth:v,setPolygonOffset:F,setScissorTest:ee,activeTexture:J,bindTexture:te,unbindTexture:_e,compressedTexImage2D:le,compressedTexImage3D:fe,texImage2D:Me,texImage3D:he,updateUBOMapping:xe,uniformBlockBinding:de,texStorage2D:ze,texStorage3D:Ce,texSubImage2D:be,texSubImage3D:Ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Ze,scissor:w,viewport:ne,reset:Q}}function nv(n,e,t,i,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return p?new OffscreenCanvas(T,v):ms("canvas")}function g(T,v,F,ee){let J=1;if((T.width>ee||T.height>ee)&&(J=ee/Math.max(T.width,T.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const te=v?Wa:Math.floor,_e=te(J*T.width),le=te(J*T.height);d===void 0&&(d=_(_e,le));const fe=F?_(_e,le):d;return fe.width=_e,fe.height=le,fe.getContext("2d").drawImage(T,0,0,_e,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+le+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Ol(T.width)&&Ol(T.height)}function f(T){return a?!1:T.wrapS!==tt||T.wrapT!==tt||T.minFilter!==Je&&T.minFilter!==mt}function b(T,v){return T.generateMipmaps&&v&&T.minFilter!==Je&&T.minFilter!==mt}function x(T){n.generateMipmap(T)}function M(T,v,F,ee,J=!1){if(a===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let te=v;if(v===n.RED&&(F===n.FLOAT&&(te=n.R32F),F===n.HALF_FLOAT&&(te=n.R16F),F===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(te=n.R8UI),F===n.UNSIGNED_SHORT&&(te=n.R16UI),F===n.UNSIGNED_INT&&(te=n.R32UI),F===n.BYTE&&(te=n.R8I),F===n.SHORT&&(te=n.R16I),F===n.INT&&(te=n.R32I)),v===n.RG&&(F===n.FLOAT&&(te=n.RG32F),F===n.HALF_FLOAT&&(te=n.RG16F),F===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const _e=J?us:je.getTransfer(ee);F===n.FLOAT&&(te=n.RGBA32F),F===n.HALF_FLOAT&&(te=n.RGBA16F),F===n.UNSIGNED_BYTE&&(te=_e===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function I(T,v,F){return b(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==mt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){return T===Je||T===ll||T===Zs?n.NEAREST:n.LINEAR}function A(T){const v=T.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&h.delete(v)}function k(T){const v=T.target;v.removeEventListener("dispose",k),P(v)}function S(T){const v=i.get(T);if(v.__webglInit===void 0)return;const F=T.source,ee=u.get(F);if(ee){const J=ee[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(T),Object.keys(ee).length===0&&u.delete(F)}i.remove(T)}function y(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const F=T.source,ee=u.get(F);delete ee[v.__cacheKey],o.memory.textures--}function P(T){const v=T.texture,F=i.get(T),ee=i.get(v);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let te=0;te<F.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(F.__webglFramebuffer[J][te]);else n.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)n.deleteFramebuffer(F.__webglFramebuffer[J]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,te=v.length;J<te;J++){const _e=i.get(v[J]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(T)}let W=0;function $(){W=0}function L(){const T=W;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),W+=1,T}function N(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function V(T,v){const F=i.get(T);if(T.isVideoTexture&&Qe(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,T,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function Y(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ce(F,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function X(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ce(F,T,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function q(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ve(F,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const Z={[ka]:n.REPEAT,[tt]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},re={[Je]:n.NEAREST,[ll]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[mt]:n.LINEAR,[zp]:n.LINEAR_MIPMAP_NEAREST,[ur]:n.LINEAR_MIPMAP_LINEAR},se={[Kp]:n.NEVER,[nm]:n.ALWAYS,[jp]:n.LESS,[Fh]:n.LEQUAL,[Jp]:n.EQUAL,[tm]:n.GEQUAL,[Qp]:n.GREATER,[em]:n.NOTEQUAL};function G(T,v,F){if(F?(n.texParameteri(T,n.TEXTURE_WRAP_S,Z[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Z[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Z[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,re[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,re[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==tt||v.wrapT!==tt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,R(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==Je&&v.minFilter!==mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Je||v.minFilter!==Zs&&v.minFilter!==ur||v.type===Rn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function K(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const ee=v.source;let J=u.get(ee);J===void 0&&(J={},u.set(ee,J));const te=N(v);if(te!==T.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[te].usedTimes++;const _e=J[T.__cacheKey];_e!==void 0&&(J[T.__cacheKey].usedTimes--,_e.usedTimes===0&&y(v)),T.__cacheKey=te,T.__webglTexture=J[te].texture}return F}function ce(T,v,F){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);const J=K(T,v),te=v.source;t.bindTexture(ee,T.__webglTexture,n.TEXTURE0+F);const _e=i.get(te);if(te.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const le=je.getPrimaries(je.workingColorSpace),fe=v.colorSpace===Wt?null:je.getPrimaries(v.colorSpace),be=v.colorSpace===Wt||le===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ne=f(v)&&m(v.image)===!1;let j=g(v.image,Ne,!1,r.maxTextureSize);j=Ue(v,j);const Ze=m(j)||a,ze=s.convert(v.format,v.colorSpace);let Ce=s.convert(v.type),Me=M(v.internalFormat,ze,Ce,v.colorSpace,v.isVideoTexture);G(ee,v,Ze);let he;const w=v.mipmaps,ne=a&&v.isVideoTexture!==!0&&Me!==Uh,xe=_e.__version===void 0||J===!0,de=I(v,j,Ze);if(v.isDepthTexture)Me=n.DEPTH_COMPONENT,a?v.type===Rn?Me=n.DEPTH_COMPONENT32F:v.type===wn?Me=n.DEPTH_COMPONENT24:v.type===$n?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:v.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Kn&&Me===n.DEPTH_COMPONENT&&v.type!==Es&&v.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=wn,Ce=s.convert(v.type)),v.format===Oi&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,v.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=$n,Ce=s.convert(v.type))),xe&&(ne?t.texStorage2D(n.TEXTURE_2D,1,Me,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,Me,j.width,j.height,0,ze,Ce,null));else if(v.isDataTexture)if(w.length>0&&Ze){ne&&xe&&t.texStorage2D(n.TEXTURE_2D,de,Me,w[0].width,w[0].height);for(let Q=0,C=w.length;Q<C;Q++)he=w[Q],ne?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,ze,Ce,he.data):t.texImage2D(n.TEXTURE_2D,Q,Me,he.width,he.height,0,ze,Ce,he.data);v.generateMipmaps=!1}else ne?(xe&&t.texStorage2D(n.TEXTURE_2D,de,Me,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,ze,Ce,j.data)):t.texImage2D(n.TEXTURE_2D,0,Me,j.width,j.height,0,ze,Ce,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ne&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Me,w[0].width,w[0].height,j.depth);for(let Q=0,C=w.length;Q<C;Q++)he=w[Q],v.format!==bt?ze!==null?ne?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,j.depth,ze,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Me,he.width,he.height,j.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,j.depth,ze,Ce,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Me,he.width,he.height,j.depth,0,ze,Ce,he.data)}else{ne&&xe&&t.texStorage2D(n.TEXTURE_2D,de,Me,w[0].width,w[0].height);for(let Q=0,C=w.length;Q<C;Q++)he=w[Q],v.format!==bt?ze!==null?ne?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,ze,he.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,ze,Ce,he.data):t.texImage2D(n.TEXTURE_2D,Q,Me,he.width,he.height,0,ze,Ce,he.data)}else if(v.isDataArrayTexture)ne?(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Me,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ze,Ce,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,j.width,j.height,j.depth,0,ze,Ce,j.data);else if(v.isData3DTexture)ne?(xe&&t.texStorage3D(n.TEXTURE_3D,de,Me,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ze,Ce,j.data)):t.texImage3D(n.TEXTURE_3D,0,Me,j.width,j.height,j.depth,0,ze,Ce,j.data);else if(v.isFramebufferTexture){if(xe)if(ne)t.texStorage2D(n.TEXTURE_2D,de,Me,j.width,j.height);else{let Q=j.width,C=j.height;for(let ie=0;ie<de;ie++)t.texImage2D(n.TEXTURE_2D,ie,Me,Q,C,0,ze,Ce,null),Q>>=1,C>>=1}}else if(w.length>0&&Ze){ne&&xe&&t.texStorage2D(n.TEXTURE_2D,de,Me,w[0].width,w[0].height);for(let Q=0,C=w.length;Q<C;Q++)he=w[Q],ne?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ze,Ce,he):t.texImage2D(n.TEXTURE_2D,Q,Me,ze,Ce,he);v.generateMipmaps=!1}else ne?(xe&&t.texStorage2D(n.TEXTURE_2D,de,Me,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Ce,j)):t.texImage2D(n.TEXTURE_2D,0,Me,ze,Ce,j);b(v,Ze)&&x(ee),_e.__version=te.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ve(T,v,F){if(v.image.length!==6)return;const ee=K(T,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const te=i.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const _e=je.getPrimaries(je.workingColorSpace),le=v.colorSpace===Wt?null:je.getPrimaries(v.colorSpace),fe=v.colorSpace===Wt||_e===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,j=[];for(let Q=0;Q<6;Q++)!be&&!Ne?j[Q]=g(v.image[Q],!1,!0,r.maxCubemapSize):j[Q]=Ne?v.image[Q].image:v.image[Q],j[Q]=Ue(v,j[Q]);const Ze=j[0],ze=m(Ze)||a,Ce=s.convert(v.format,v.colorSpace),Me=s.convert(v.type),he=M(v.internalFormat,Ce,Me,v.colorSpace),w=a&&v.isVideoTexture!==!0,ne=te.__version===void 0||ee===!0;let xe=I(v,Ze,ze);G(n.TEXTURE_CUBE_MAP,v,ze);let de;if(be){w&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,he,Ze.width,Ze.height);for(let Q=0;Q<6;Q++){de=j[Q].mipmaps;for(let C=0;C<de.length;C++){const ie=de[C];v.format!==bt?Ce!==null?w?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C,0,0,ie.width,ie.height,Ce,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C,he,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C,0,0,ie.width,ie.height,Ce,Me,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C,he,ie.width,ie.height,0,Ce,Me,ie.data)}}}else{de=v.mipmaps,w&&ne&&(de.length>0&&xe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,he,j[0].width,j[0].height));for(let Q=0;Q<6;Q++)if(Ne){w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,j[Q].width,j[Q].height,Ce,Me,j[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,j[Q].width,j[Q].height,0,Ce,Me,j[Q].data);for(let C=0;C<de.length;C++){const oe=de[C].image[Q].image;w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C+1,0,0,oe.width,oe.height,Ce,Me,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C+1,he,oe.width,oe.height,0,Ce,Me,oe.data)}}else{w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,Me,j[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,Ce,Me,j[Q]);for(let C=0;C<de.length;C++){const ie=de[C];w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C+1,0,0,Ce,Me,ie.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,C+1,he,Ce,Me,ie.image[Q])}}}b(v,ze)&&x(n.TEXTURE_CUBE_MAP),te.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ge(T,v,F,ee,J,te){const _e=s.convert(F.format,F.colorSpace),le=s.convert(F.type),fe=M(F.internalFormat,_e,le,F.colorSpace);if(!i.get(v).__hasExternalTextures){const Ne=Math.max(1,v.width>>te),j=Math.max(1,v.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,fe,Ne,j,v.depth,0,_e,le,null):t.texImage2D(J,te,fe,Ne,j,0,_e,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),me(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(F).__webglTexture,0,Re(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(F).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(T,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||me(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===Rn?ee=n.DEPTH_COMPONENT32F:J.type===wn&&(ee=n.DEPTH_COMPONENT24));const te=Re(v);me(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Re(v);F&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):me(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<ee.length;J++){const te=ee[J],_e=s.convert(te.format,te.colorSpace),le=s.convert(te.type),fe=M(te.internalFormat,_e,le,te.colorSpace),be=Re(v);F&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,fe,v.width,v.height):me(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const ee=i.get(v.depthTexture).__webglTexture,J=Re(v);if(v.depthTexture.format===Kn)me(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Oi)me(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Te(T){const v=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(T,v,F){const ee=i.get(T);v!==void 0&&ge(ee.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Te(T)}function O(T){const v=T.texture,F=i.get(T),ee=i.get(v);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,o.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,te=T.isWebGLMultipleRenderTargets===!0,_e=m(T)||a;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let fe=0;fe<v.mipmaps.length;fe++)F.__webglFramebuffer[le][fe]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const le=T.texture;for(let fe=0,be=le.length;fe<be;fe++){const Ne=i.get(le[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&me(T)===!1){const le=te?v:[v];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const be=le[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Ne=s.convert(be.format,be.colorSpace),j=s.convert(be.type),Ze=M(be.internalFormat,Ne,j,be.colorSpace,T.isXRRenderTarget===!0),ze=Re(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ze,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),G(n.TEXTURE_CUBE_MAP,v,_e);for(let le=0;le<6;le++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(F.__webglFramebuffer[le][fe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else ge(F.__webglFramebuffer[le],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);b(v,_e)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=T.texture;for(let fe=0,be=le.length;fe<be;fe++){const Ne=le[fe],j=i.get(Ne);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),G(n.TEXTURE_2D,Ne,_e),ge(F.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),b(Ne,_e)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?le=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),G(le,v,_e),a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(F.__webglFramebuffer[fe],T,v,n.COLOR_ATTACHMENT0,le,fe);else ge(F.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,le,0);b(v,_e)&&x(le),t.unbindTexture()}T.depthBuffer&&Te(T)}function gt(T){const v=m(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,J=F.length;ee<J;ee++){const te=F[ee];if(b(te,v)){const _e=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(te).__webglTexture;t.bindTexture(_e,le),x(_e),t.unbindTexture()}}}function Ee(T){if(a&&T.samples>0&&me(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,ee=T.height;let J=n.COLOR_BUFFER_BIT;const te=[],_e=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(T),fe=T.isWebGLMultipleRenderTargets===!0;if(fe)for(let be=0;be<v.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<v.length;be++){te.push(n.COLOR_ATTACHMENT0+be),T.depthBuffer&&te.push(_e);const Ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ne===!1&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]),Ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),fe){const j=i.get(v[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,F,ee,0,0,F,ee,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<v.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const Ne=i.get(v[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(T){return Math.min(r.maxSamples,T.samples)}function me(T){const v=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Ue(T,v){const F=T.colorSpace,ee=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Va||F!==gn&&F!==Wt&&(je.getTransfer(F)===et?a===!1?e.has("EXT_sRGB")===!0&&ee===bt?(T.format=Va,T.minFilter=mt,T.generateMipmaps=!1):v=zh.sRGBToLinear(v):(ee!==bt||J!==Ct)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Ge,this.setupRenderTarget=O,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=me}function iv(n,e,t){const i=t.isWebGL2;function r(s,o=Wt){let a;const c=je.getTransfer(o);if(s===Ct)return n.UNSIGNED_BYTE;if(s===Ch)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ih)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Bp)return n.BYTE;if(s===kp)return n.SHORT;if(s===Es)return n.UNSIGNED_SHORT;if(s===Rh)return n.INT;if(s===wn)return n.UNSIGNED_INT;if(s===Rn)return n.FLOAT;if(s===dr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hp)return n.ALPHA;if(s===bt)return n.RGBA;if(s===Vp)return n.LUMINANCE;if(s===Gp)return n.LUMINANCE_ALPHA;if(s===Kn)return n.DEPTH_COMPONENT;if(s===Oi)return n.DEPTH_STENCIL;if(s===Va)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hs)return n.RED;if(s===Lh)return n.RED_INTEGER;if(s===Wp)return n.RG;if(s===Dh)return n.RG_INTEGER;if(s===Ph)return n.RGBA_INTEGER;if(s===$s||s===Ks||s===js||s===Js)if(c===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$s)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$s)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Js)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cl||s===hl||s===ul||s===dl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fl||s===pl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===fl)return c===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ml||s===_l||s===gl||s===xl||s===vl||s===Sl||s===Ml||s===El||s===yl||s===bl||s===Tl||s===Al||s===wl||s===Rl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ml)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_l)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ml)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===El)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Al)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rl)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qs||s===Cl||s===Il)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qs)return c===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Il)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xp||s===Ll||s===Dl||s===Pl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ll)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$n?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class rv extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class av extends si{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const b=[],x=[],M=new ke;let I=null;const R=new Vt;R.layers.enable(1),R.viewport=new St;const A=new Vt;A.layers.enable(2),A.viewport=new St;const k=[R,A],S=new rv;S.layers.enable(1),S.layers.enable(2);let y=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=b[G];return K===void 0&&(K=new ya,b[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=b[G];return K===void 0&&(K=new ya,b[G]=K),K.getGripSpace()},this.getHand=function(G){let K=b[G];return K===void 0&&(K=new ya,b[G]=K),K.getHandSpace()};function W(G){const K=x.indexOf(G.inputSource);if(K===-1)return;const ce=b[K];ce!==void 0&&(ce.update(G.inputSource,G.frame,l||o),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",L);for(let G=0;G<b.length;G++){const K=x[G];K!==null&&(x[G]=null,b[G].disconnect(K))}y=null,P=null,e.setRenderTarget(m),p=null,u=null,d=null,r=null,f=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",$),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new ti(p.framebufferWidth,p.framebufferHeight,{format:bt,type:Ct,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ce=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Oi:Kn,ce=g.stencil?$n:wn);const ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new ti(u.textureWidth,u.textureHeight,{format:bt,type:Ct,depthTexture:new jh(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(f);Le.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(G){for(let K=0;K<G.removed.length;K++){const ce=G.removed[K],ve=x.indexOf(ce);ve>=0&&(x[ve]=null,b[ve].disconnect(ce))}for(let K=0;K<G.added.length;K++){const ce=G.added[K];let ve=x.indexOf(ce);if(ve===-1){for(let Le=0;Le<b.length;Le++)if(Le>=x.length){x.push(ce),ve=Le;break}else if(x[Le]===null){x[Le]=ce,ve=Le;break}if(ve===-1)break}const ge=b[ve];ge&&ge.connect(ce)}}const N=new D,V=new D;function Y(G,K,ce){N.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const ve=N.distanceTo(V),ge=K.projectionMatrix.elements,Le=ce.projectionMatrix.elements,De=ge[14]/(ge[10]-1),Te=ge[14]/(ge[10]+1),Ge=(ge[9]+1)/ge[5],O=(ge[9]-1)/ge[5],gt=(ge[8]-1)/ge[0],Ee=(Le[8]+1)/Le[0],Re=De*gt,me=De*Ee,Qe=ve/(-gt+Ee),Ue=Qe*-gt;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ue),G.translateZ(Qe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=De+Qe,v=Te+Qe,F=Re-Ue,ee=me+(ve-Ue),J=Ge*Te/v*T,te=O*Te/v*T;G.projectionMatrix.makePerspective(F,ee,J,te,T,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;S.near=A.near=R.near=G.near,S.far=A.far=R.far=G.far,(y!==S.near||P!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),y=S.near,P=S.far);const K=G.parent,ce=S.cameras;X(S,K);for(let ve=0;ve<ce.length;ve++)X(ce[ve],K);ce.length===2?Y(S,R,A):S.projectionMatrix.copy(R.projectionMatrix),q(G,S,K)};function q(G,K,ce){ce===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ga*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let Z=null;function re(G,K){if(h=K.getViewerPose(l||o),_=K,h!==null){const ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ve=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let ge=0;ge<ce.length;ge++){const Le=ce[ge];let De=null;if(p!==null)De=p.getViewport(Le);else{const Ge=d.getViewSubImage(u,Le);De=Ge.viewport,ge===0&&(e.setRenderTargetTextures(f,Ge.colorTexture,u.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(f))}let Te=k[ge];Te===void 0&&(Te=new Vt,Te.layers.enable(ge),Te.viewport=new St,k[ge]=Te),Te.matrix.fromArray(Le.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Le.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(Te)}}for(let ce=0;ce<b.length;ce++){const ve=x[ce],ge=b[ce];ve!==null&&ge!==void 0&&ge.update(ve,K,l||o)}Z&&Z(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const se=new $h;se.setAnimationLoop(re),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function ov(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Xh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lv(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,x){const M=x.program;i.uniformBlockBinding(b,M)}function l(b,x){let M=r[b.id];M===void 0&&(_(b),M=h(b),r[b.id]=M,b.addEventListener("dispose",m));const I=x.program;i.updateUBOMapping(b,I);const R=e.render.frame;s[b.id]!==R&&(u(b),s[b.id]=R)}function h(b){const x=d();b.__bindingPointIndex=x;const M=n.createBuffer(),I=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const x=r[b.id],M=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,A=M.length;R<A;R++){const k=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,y=k.length;S<y;S++){const P=k[S];if(p(P,R,S,I)===!0){const W=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let N=0;N<$.length;N++){const V=$[N],Y=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,W+L,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,x,M,I){const R=b.value,A=x+"_"+M;if(I[A]===void 0)return typeof R=="number"||typeof R=="boolean"?I[A]=R:I[A]=R.clone(),!0;{const k=I[A];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return I[A]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function _(b){const x=b.uniforms;let M=0;const I=16;for(let A=0,k=x.length;A<k;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,P=S.length;y<P;y++){const W=S[y],$=Array.isArray(W.value)?W.value:[W.value];for(let L=0,N=$.length;L<N;L++){const V=$[L],Y=g(V),X=M%I;X!==0&&I-X<Y.boundary&&(M+=I-X),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=Y.storage}}}const R=M%I;return R>0&&(M+=I-R),b.__size=M,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class ro{constructor(e={}){const{canvas:t=sm(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let M=!1,I=0,R=0,A=null,k=-1,S=null;const y=new St,P=new St;let W=null;const $=new Ke(0);let L=0,N=t.width,V=t.height,Y=1,X=null,q=null;const Z=new St(0,0,N,V),re=new St(0,0,N,V);let se=!1;const G=new Zh;let K=!1,ce=!1,ve=null;const ge=new _t,Le=new ke,De=new D,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return A===null?Y:1}let O=i;function gt(E,U){for(let B=0;B<E.length;B++){const H=E[B],z=t.getContext(H,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eo}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ie,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),O=gt(U,E),O===null)throw gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Re,me,Qe,Ue,T,v,F,ee,J,te,_e,le,fe,be,Ne,j,Ze,ze,Ce,Me,he,w,ne;function xe(){Ee=new x0(O),Re=new d0(O,Ee,e),Ee.init(Re),he=new iv(O,Ee,Re),me=new tv(O,Ee,Re),Qe=new M0(O),Ue=new Hx,T=new nv(O,Ee,me,Ue,Re,he,Qe),v=new p0(x),F=new g0(x),ee=new Cm(O,Re),w=new h0(O,Ee,ee,Re),J=new v0(O,ee,Qe,w),te=new T0(O,J,ee,Qe),ze=new b0(O,Re,T),Ne=new f0(Ue),_e=new kx(x,v,F,Ee,Re,w,Ne),le=new ov(x,Ue),fe=new Gx,be=new $x(Ee,Re),Ze=new c0(x,v,F,me,te,u,c),j=new ev(x,te,Re),ne=new lv(O,Qe,Re,me),Ce=new u0(O,Ee,Qe,Re),Me=new S0(O,Ee,Qe,Re),Qe.programs=_e.programs,x.capabilities=Re,x.extensions=Ee,x.properties=Ue,x.renderLists=fe,x.shadowMap=j,x.state=me,x.info=Qe}xe();const de=new av(x,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(N,V,!1))},this.getSize=function(E){return E.set(N,V)},this.setSize=function(E,U,B=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,V=U,t.width=Math.floor(E*Y),t.height=Math.floor(U*Y),B===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(N*Y,V*Y).floor()},this.setDrawingBufferSize=function(E,U,B){N=E,V=U,Y=B,t.width=Math.floor(E*B),t.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,U,B,H){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,B,H),me.viewport(y.copy(Z).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,U,B,H){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,U,B,H),me.scissor(P.copy(re).multiplyScalar(Y).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){me.setScissorTest(se=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(E=!0,U=!0,B=!0){let H=0;if(E){let z=!1;if(A!==null){const ue=A.texture.format;z=ue===Ph||ue===Dh||ue===Lh}if(z){const ue=A.texture.type,Se=ue===Ct||ue===wn||ue===Es||ue===$n||ue===Ch||ue===Ih,we=Ze.getClearColor(),Ie=Ze.getClearAlpha(),Be=we.r,Pe=we.g,Fe=we.b;Se?(p[0]=Be,p[1]=Pe,p[2]=Fe,p[3]=Ie,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=Be,_[1]=Pe,_[2]=Fe,_[3]=Ie,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT),B&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),fe.dispose(),be.dispose(),Ue.dispose(),v.dispose(),F.dispose(),te.dispose(),w.dispose(),ne.dispose(),_e.dispose(),de.dispose(),de.removeEventListener("sessionstart",at),de.removeEventListener("sessionend",Ye),ve&&(ve.dispose(),ve=null),lt.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Qe.autoReset,U=j.enabled,B=j.autoUpdate,H=j.needsUpdate,z=j.type;xe(),Qe.autoReset=E,j.enabled=U,j.autoUpdate=B,j.needsUpdate=H,j.type=z}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const U=E.target;U.removeEventListener("dispose",oe),Ae(U)}function Ae(E){ye(E),Ue.remove(E)}function ye(E){const U=Ue.get(E).programs;U!==void 0&&(U.forEach(function(B){_e.releaseProgram(B)}),E.isShaderMaterial&&_e.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,H,z,ue){U===null&&(U=Te);const Se=z.isMesh&&z.matrixWorld.determinant()<0,we=au(E,U,B,H,z);me.setMaterial(H,Se);let Ie=B.index,Be=1;if(H.wireframe===!0){if(Ie=J.getWireframeAttribute(B),Ie===void 0)return;Be=2}const Pe=B.drawRange,Fe=B.attributes.position;let ot=Pe.start*Be,Ut=(Pe.start+Pe.count)*Be;ue!==null&&(ot=Math.max(ot,ue.start*Be),Ut=Math.min(Ut,(ue.start+ue.count)*Be)),Ie!==null?(ot=Math.max(ot,0),Ut=Math.min(Ut,Ie.count)):Fe!=null&&(ot=Math.max(ot,0),Ut=Math.min(Ut,Fe.count));const dt=Ut-ot;if(dt<0||dt===1/0)return;w.setup(z,H,we,B,Ie);let sn,it=Ce;if(Ie!==null&&(sn=ee.get(Ie),it=Me,it.setIndex(sn)),z.isMesh)H.wireframe===!0?(me.setLineWidth(H.wireframeLinewidth*Ge()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(z.isLine){let He=H.linewidth;He===void 0&&(He=1),me.setLineWidth(He*Ge()),z.isLineSegments?it.setMode(O.LINES):z.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else z.isPoints?it.setMode(O.POINTS):z.isSprite&&it.setMode(O.TRIANGLES);if(z.isBatchedMesh)it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)it.renderInstances(ot,dt,z.count);else if(B.isInstancedBufferGeometry){const He=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ws=Math.min(B.instanceCount,He);it.renderInstances(ot,dt,ws)}else it.render(ot,dt)};function We(E,U,B){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=Rt,E.needsUpdate=!0,br(E,U,B),E.side=Un,E.needsUpdate=!0,br(E,U,B),E.side=mn):br(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),m=be.get(B),m.init(),b.push(m),B.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==B&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);const H=new Set;return E.traverse(function(z){const ue=z.material;if(ue)if(Array.isArray(ue))for(let Se=0;Se<ue.length;Se++){const we=ue[Se];We(we,B,z),H.add(we)}else We(ue,B,z),H.add(ue)}),b.pop(),m=null,H},this.compileAsync=function(E,U,B=null){const H=this.compile(E,U,B);return new Promise(z=>{function ue(){if(H.forEach(function(Se){Ue.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){z(E);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xe=null;function rt(E){Xe&&Xe(E)}function at(){lt.stop()}function Ye(){lt.start()}const lt=new $h;lt.setAnimationLoop(rt),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(E){Xe=E,de.setAnimationLoop(E),E===null?lt.stop():lt.start()},de.addEventListener("sessionstart",at),de.addEventListener("sessionend",Ye),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,A),m=be.get(E,b.length),m.init(),b.push(m),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,ce),g=fe.get(E,f.length),g.init(),f.push(g),Kt(E,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,q),this.info.render.frame++,K===!0&&Ne.beginShadows();const B=m.state.shadowsArray;if(j.render(B,E,U),K===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(g,E),m.setupLights(x._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let z=0,ue=H.length;z<ue;z++){const Se=H[z];so(g,E,Se,Se.viewport)}}else so(g,E,U);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,U),w.resetDefaultState(),k=-1,S=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Kt(E,U,B,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){H&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const Se=te.update(E),we=E.material;we.visible&&g.push(E,Se,we,B,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const Se=te.update(E),we=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(we)){const Ie=Se.groups;for(let Be=0,Pe=Ie.length;Be<Pe;Be++){const Fe=Ie[Be],ot=we[Fe.materialIndex];ot&&ot.visible&&g.push(E,Se,ot,B,De.z,Fe)}}else we.visible&&g.push(E,Se,we,B,De.z,null)}}const ue=E.children;for(let Se=0,we=ue.length;Se<we;Se++)Kt(ue[Se],U,B,H)}function so(E,U,B,H){const z=E.opaque,ue=E.transmissive,Se=E.transparent;m.setupLightsView(B),K===!0&&Ne.setGlobalState(x.clippingPlanes,B),ue.length>0&&su(z,ue,U,B),H&&me.viewport(y.copy(H)),z.length>0&&yr(z,U,B),ue.length>0&&yr(ue,U,B),Se.length>0&&yr(Se,U,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function su(E,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ue=Re.isWebGL2;ve===null&&(ve=new ti(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?dr:Ct,minFilter:ur,samples:ue?4:0})),x.getDrawingBufferSize(Le),ue?ve.setSize(Le.x,Le.y):ve.setSize(Wa(Le.x),Wa(Le.y));const Se=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor($),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=Pn,yr(E,B,H),T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve);let Ie=!1;for(let Be=0,Pe=U.length;Be<Pe;Be++){const Fe=U[Be],ot=Fe.object,Ut=Fe.geometry,dt=Fe.material,sn=Fe.group;if(dt.side===mn&&ot.layers.test(H.layers)){const it=dt.side;dt.side=Rt,dt.needsUpdate=!0,ao(ot,B,H,Ut,dt,sn),dt.side=it,dt.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve)),x.setRenderTarget(Se),x.setClearColor($,L),x.toneMapping=we}function yr(E,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ue=E.length;z<ue;z++){const Se=E[z],we=Se.object,Ie=Se.geometry,Be=H===null?Se.material:H,Pe=Se.group;we.layers.test(B.layers)&&ao(we,U,B,Ie,Be,Pe)}}function ao(E,U,B,H,z,ue){E.onBeforeRender(x,U,B,H,z,ue),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,U,B,H,E,ue),z.transparent===!0&&z.side===mn&&z.forceSinglePass===!1?(z.side=Rt,z.needsUpdate=!0,x.renderBufferDirect(B,U,H,z,E,ue),z.side=Un,z.needsUpdate=!0,x.renderBufferDirect(B,U,H,z,E,ue),z.side=mn):x.renderBufferDirect(B,U,H,z,E,ue),E.onAfterRender(x,U,B,H,z,ue)}function br(E,U,B){U.isScene!==!0&&(U=Te);const H=Ue.get(E),z=m.state.lights,ue=m.state.shadowsArray,Se=z.state.version,we=_e.getParameters(E,z.state,ue,U,B),Ie=_e.getProgramCacheKey(we);let Be=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?F:v).get(E.envMap||H.environment),Be===void 0&&(E.addEventListener("dispose",oe),Be=new Map,H.programs=Be);let Pe=Be.get(Ie);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===Se)return lo(E,we),Pe}else we.uniforms=_e.getUniforms(E),E.onBuild(B,we,x),E.onBeforeCompile(we,x),Pe=_e.acquireProgram(we,Ie),Be.set(Ie,Pe),H.uniforms=we.uniforms;const Fe=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=Ne.uniform),lo(E,we),H.needsLights=lu(E),H.lightsStateVersion=Se,H.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function oo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ss.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function lo(E,U){const B=Ue.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function au(E,U,B,H,z){U.isScene!==!0&&(U=Te),T.resetTextureUnits();const ue=U.fog,Se=H.isMeshStandardMaterial?U.environment:null,we=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gn,Ie=(H.isMeshStandardMaterial?F:v).get(H.envMap||Se),Be=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,Ut=!!B.morphAttributes.color;let dt=Pn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(dt=x.toneMapping);const sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=sn!==void 0?sn.length:0,He=Ue.get(H),ws=m.state.lights;if(K===!0&&(ce===!0||E!==S)){const Bt=E===S&&H.id===k;Ne.setState(H,E,Bt)}let st=!1;H.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ws.state.version||He.outputColorSpace!==we||z.isBatchedMesh&&He.batching===!1||!z.isBatchedMesh&&He.batching===!0||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||He.envMap!==Ie||H.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ne.numPlanes||He.numIntersection!==Ne.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Pe||He.morphTargets!==Fe||He.morphNormals!==ot||He.morphColors!==Ut||He.toneMapping!==dt||Re.isWebGL2===!0&&He.morphTargetsCount!==it)&&(st=!0):(st=!0,He.__version=H.version);let Fn=He.currentProgram;st===!0&&(Fn=br(H,U,z));let co=!1,Gi=!1,Rs=!1;const Mt=Fn.getUniforms(),On=He.uniforms;if(me.useProgram(Fn.program)&&(co=!0,Gi=!0,Rs=!0),H.id!==k&&(k=H.id,Gi=!0),co||S!==E){Mt.setValue(O,"projectionMatrix",E.projectionMatrix),Mt.setValue(O,"viewMatrix",E.matrixWorldInverse);const Bt=Mt.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,De.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Gi=!0,Rs=!0)}if(z.isSkinnedMesh){Mt.setOptional(O,z,"bindMatrix"),Mt.setOptional(O,z,"bindMatrixInverse");const Bt=z.skeleton;Bt&&(Re.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Mt.setValue(O,"boneTexture",Bt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Mt.setOptional(O,z,"batchingTexture"),Mt.setValue(O,"batchingTexture",z._matricesTexture,T));const Cs=B.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&Re.isWebGL2===!0)&&ze.update(z,B,Fn),(Gi||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,Mt.setValue(O,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(On.envMap.value=Ie,On.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Gi&&(Mt.setValue(O,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&ou(On,Rs),ue&&H.fog===!0&&le.refreshFogUniforms(On,ue),le.refreshMaterialUniforms(On,H,Y,V,ve),ss.upload(O,oo(He),On,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ss.upload(O,oo(He),On,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(O,"center",z.center),Mt.setValue(O,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(O,"normalMatrix",z.normalMatrix),Mt.setValue(O,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Bt=H.uniformsGroups;for(let Is=0,cu=Bt.length;Is<cu;Is++)if(Re.isWebGL2){const ho=Bt[Is];ne.update(ho,Fn),ne.bind(ho,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function ou(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function lu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,B){Ue.get(E.texture).__webglTexture=U,Ue.get(E.depthTexture).__webglTexture=B;const H=Ue.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const B=Ue.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){A=E,I=U,R=B;let H=!0,z=null,ue=!1,Se=!1;if(E){const Ie=Ue.get(E);Ie.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Ie.__webglFramebuffer===void 0?T.setupRenderTarget(E):Ie.__hasExternalTextures&&T.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);const Pe=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?z=Pe[U][B]:z=Pe[U],ue=!0):Re.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?z=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[B]:z=Pe,y.copy(E.viewport),P.copy(E.scissor),W=E.scissorTest}else y.copy(Z).multiplyScalar(Y).floor(),P.copy(re).multiplyScalar(Y).floor(),W=se;if(me.bindFramebuffer(O.FRAMEBUFFER,z)&&Re.drawBuffers&&H&&me.drawBuffers(E,z),me.viewport(y),me.scissor(P),me.setScissorTest(W),ue){const Ie=Ue.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,B)}else if(Se){const Ie=Ue.get(E.texture),Be=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,B||0,Be)}k=-1},this.readRenderTargetPixels=function(E,U,B,H,z,ue,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){me.bindFramebuffer(O.FRAMEBUFFER,we);try{const Ie=E.texture,Be=Ie.format,Pe=Ie.type;if(Be!==bt&&he.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Pe===dr&&(Ee.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Pe!==Ct&&he.convert(Pe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Rn&&(Re.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&B>=0&&B<=E.height-z&&O.readPixels(U,B,H,z,he.convert(Be),he.convert(Pe),ue)}finally{const Ie=A!==null?Ue.get(A).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,U,B=0){const H=Math.pow(2,-B),z=Math.floor(U.image.width*H),ue=Math.floor(U.image.height*H);T.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,E.x,E.y,z,ue),me.unbindTexture()},this.copyTextureToTexture=function(E,U,B,H=0){const z=U.image.width,ue=U.image.height,Se=he.convert(B.format),we=he.convert(B.type);T.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,z,ue,Se,we,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Se,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,Se,we,U.image),H===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B,H,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,we=E.max.z-E.min.z+1,Ie=he.convert(H.format),Be=he.convert(H.type);let Pe;if(H.isData3DTexture)T.setTexture3D(H,0),Pe=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)T.setTexture2DArray(H,0),Pe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Fe=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ut=O.getParameter(O.UNPACK_SKIP_PIXELS),dt=O.getParameter(O.UNPACK_SKIP_ROWS),sn=O.getParameter(O.UNPACK_SKIP_IMAGES),it=B.isCompressedTexture?B.mipmaps[z]:B.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,it.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Pe,z,U.x,U.y,U.z,ue,Se,we,Ie,Be,it.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,z,U.x,U.y,U.z,ue,Se,we,Ie,it.data)):O.texSubImage3D(Pe,z,U.x,U.y,U.z,ue,Se,we,Ie,Be,it),O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,dt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,sn),z===0&&H.generateMipmaps&&O.generateMipmap(Pe),me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){I=0,R=0,A=null,me.reset(),w.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===to?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?jn:Nh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jn?vt:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cv extends ro{}cv.prototype.isWebGL1Renderer=!0;class iu extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class pr extends Dt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Je,h=Je,d,u){super(null,o,a,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ru extends Er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ec=new D,yc=new D,bc=new _t,ba=new no,Qr=new bs;class hv extends Pt{constructor(e=new xn,t=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ec.fromBufferAttribute(t,r-1),yc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ec.distanceTo(yc);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,e.ray.intersectsSphere(Qr)===!1)return;bc.copy(r).invert(),ba.copy(e.ray).applyMatrix4(bc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,d=new D,u=new D,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const f=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=f,M=b-1;x<M;x+=p){const I=_.getX(x),R=_.getX(x+1);if(l.fromBufferAttribute(m,I),h.fromBufferAttribute(m,R),ba.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(u);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let x=f,M=b-1;x<M;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ba.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Tc=new D,Ac=new D;class uv extends hv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Tc.fromBufferAttribute(t,r),Ac.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tc.distanceTo(Ac);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const es=new D,ts=new D,Ta=new D,ns=new Ht;class dv extends xn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(tr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:f}=ns;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),ns.getNormal(Ta),d[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const x=(b+1)%3,M=d[b],I=d[x],R=ns[h[b]],A=ns[h[x]],k=`${M}_${I}`,S=`${I}_${M}`;S in u&&u[S]?(Ta.dot(u[S].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(A.x,A.y,A.z)),u[S]=null):k in u||(u[k]={index0:l[b],index1:l[x],normal:Ta.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:m}=u[_];es.fromBufferAttribute(a,g),ts.fromBufferAttribute(a,m),p.push(es.x,es.y,es.z),p.push(ts.x,ts.y,ts.z)}this.setAttribute("position",new rn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);const wi=32;class fv{constructor(e){pe(this,"volumeData");pe(this,"segmentationData",null);pe(this,"dataTexture3D",null);pe(this,"transferFunctionTexture",null);pe(this,"segmentationTexture3D",null);pe(this,"segmentationLUTTexture",null);this.volumeData=e}create3DTexture(){const{dimensions:e,data:t,minValue:i,maxValue:r}=this.volumeData,s=e.width*e.height*e.depth,o=r-i,a=new Uint16Array(s);if(o===0)a.fill(32768);else for(let c=0;c<t.length;c++){const l=(t[c]-i)/o;a[c]=Math.min(65535,Math.max(0,Math.round(l*65535)))}return this.dataTexture3D=new _s(a,e.width,e.height,e.depth),this.dataTexture3D.format=hs,this.dataTexture3D.type=Es,this.dataTexture3D.minFilter=mt,this.dataTexture3D.magFilter=mt,this.dataTexture3D.wrapS=tt,this.dataTexture3D.wrapT=tt,this.dataTexture3D.wrapR=tt,this.dataTexture3D.unpackAlignment=2,this.dataTexture3D.needsUpdate=!0,this.dataTexture3D}createTransferFunctionTexture(e){const i=new Uint8Array(4096),r=[...e].sort((s,o)=>s.value-o.value);for(let s=0;s<1024;s++){const o=s/1023;let a=r[0],c=r[r.length-1];for(let _=0;_<r.length-1;_++)if(o>=r[_].value&&o<=r[_+1].value){a=r[_],c=r[_+1];break}const l=(o-a.value)/(c.value-a.value||1),h=Math.floor(a.color.r+(c.color.r-a.color.r)*l),d=Math.floor(a.color.g+(c.color.g-a.color.g)*l),u=Math.floor(a.color.b+(c.color.b-a.color.b)*l),p=Math.floor((a.opacity+(c.opacity-a.opacity)*l)*255);i[s*4]=h,i[s*4+1]=d,i[s*4+2]=u,i[s*4+3]=p}return this.transferFunctionTexture=new pr(i,1024,1),this.transferFunctionTexture.format=bt,this.transferFunctionTexture.type=Ct,this.transferFunctionTexture.minFilter=mt,this.transferFunctionTexture.magFilter=mt,this.transferFunctionTexture.wrapS=tt,this.transferFunctionTexture.wrapT=tt,this.transferFunctionTexture.needsUpdate=!0,this.transferFunctionTexture}getDefaultTransferFunction(){const{minValue:e,maxValue:t}=this.volumeData;return e<0||t>255?[{value:0,color:{r:0,g:0,b:0},opacity:0},{value:.1,color:{r:30,g:30,b:50},opacity:0},{value:.2,color:{r:80,g:80,b:120},opacity:.15},{value:.35,color:{r:150,g:100,b:80},opacity:.4},{value:.5,color:{r:200,g:150,b:100},opacity:.6},{value:.7,color:{r:240,g:200,b:160},opacity:.8},{value:.85,color:{r:255,g:240,b:220},opacity:.9},{value:1,color:{r:255,g:255,b:255},opacity:1}]:[{value:0,color:{r:0,g:0,b:0},opacity:0},{value:.2,color:{r:100,g:100,b:150},opacity:.1},{value:.4,color:{r:150,g:120,b:100},opacity:.25},{value:.6,color:{r:200,g:150,b:100},opacity:.5},{value:.8,color:{r:255,g:255,b:200},opacity:.75},{value:1,color:{r:255,g:255,b:255},opacity:1}]}getDefaultWindowLevel(){const{minValue:e,maxValue:t}=this.volumeData;return{window:t-e,level:(t+e)/2}}getVolumeSize(){const{dimensions:e,spacing:t}=this.volumeData,i=Math.max(e.width*t.x,e.height*t.y,e.depth*t.z);return new D(e.width*t.x/i*2,e.height*t.y/i*2,e.depth*t.z/i*2)}getDimensions(){return this.volumeData.dimensions}getSpacing(){return this.volumeData.spacing}getHistogram(){return this.volumeData.histogram}getValueRange(){return{min:this.volumeData.minValue,max:this.volumeData.maxValue}}getVoxelValue(e,t,i){const{dimensions:r}=this.volumeData;if(e<0||e>=r.width||t<0||t>=r.height||i<0||i>=r.depth)return 0;const s=Math.floor(i)*r.width*r.height+Math.floor(t)*r.width+Math.floor(e);return this.volumeData.data[s]}getSlice(e,t){const{dimensions:i}=this.volumeData,{minValue:r,maxValue:s}=this.volumeData,o=s-r;let a,c;const l=[];switch(e){case"axial":a=i.width,c=i.height;for(let h=0;h<c;h++)for(let d=0;d<a;d++){const u=this.getVoxelValue(d,h,t);l.push(Math.min(255,Math.max(0,Math.floor((u-r)/o*255))))}break;case"sagittal":a=i.height,c=i.depth;for(let h=0;h<c;h++)for(let d=0;d<a;d++){const u=this.getVoxelValue(t,d,h);l.push(Math.min(255,Math.max(0,Math.floor((u-r)/o*255))))}break;case"coronal":a=i.width,c=i.depth;for(let h=0;h<c;h++)for(let d=0;d<a;d++){const u=this.getVoxelValue(d,t,h);l.push(Math.min(255,Math.max(0,Math.floor((u-r)/o*255))))}break}return new Uint8Array(l)}setSegmentation(e){this.segmentationData=e}getSegmentation(){return this.segmentationData}createSegmentation3DTexture(){if(!this.segmentationData)return null;const{dimensions:e,data:t}=this.segmentationData,i=e.width*e.height*e.depth,r=new Uint8Array(i);for(let s=0;s<t.length&&s<i;s++)r[s]=Math.min(wi-1,Math.max(0,t[s]));return this.segmentationTexture3D=new _s(r,e.width,e.height,e.depth),this.segmentationTexture3D.format=hs,this.segmentationTexture3D.type=Ct,this.segmentationTexture3D.minFilter=Je,this.segmentationTexture3D.magFilter=Je,this.segmentationTexture3D.wrapS=tt,this.segmentationTexture3D.wrapT=tt,this.segmentationTexture3D.wrapR=tt,this.segmentationTexture3D.needsUpdate=!0,this.segmentationTexture3D}createSegmentationLUT(e){const t=new Uint8Array(wi*4);t[0]=0,t[1]=0,t[2]=0,t[3]=0;for(let i=0;i<e.length;i++){const r=e[i],s=r.id;if(s>=wi)continue;const o=s*4;t[o]=r.color.r,t[o+1]=r.color.g,t[o+2]=r.color.b,t[o+3]=r.visible?Math.floor(r.opacity*255):0}return this.segmentationLUTTexture=new pr(t,wi,1),this.segmentationLUTTexture.format=bt,this.segmentationLUTTexture.type=Ct,this.segmentationLUTTexture.minFilter=Je,this.segmentationLUTTexture.magFilter=Je,this.segmentationLUTTexture.wrapS=tt,this.segmentationLUTTexture.wrapT=tt,this.segmentationLUTTexture.needsUpdate=!0,this.segmentationLUTTexture}updateSegmentationLUT(e){if(!this.segmentationLUTTexture)return;const t=this.segmentationLUTTexture.image.data;t[0]=0,t[1]=0,t[2]=0,t[3]=0;for(let i=0;i<e.length;i++){const r=e[i],s=r.id;if(s>=wi)continue;const o=s*4;t[o]=r.color.r,t[o+1]=r.color.g,t[o+2]=r.color.b,t[o+3]=r.visible?Math.floor(r.opacity*255):0}this.segmentationLUTTexture.needsUpdate=!0}getSegmentationSlice(e,t){if(!this.segmentationData)return null;const{dimensions:i,data:r}=this.segmentationData;let s,o;const a=[];switch(e){case"axial":s=i.width,o=i.height;for(let c=0;c<o;c++)for(let l=0;l<s;l++){const h=t*s*o+c*s+l;a.push(h<r.length?r[h]:0)}break;case"sagittal":s=i.height,o=i.depth;for(let c=0;c<o;c++)for(let l=0;l<s;l++){const h=c*i.width*i.height+l*i.width+t;a.push(h<r.length?r[h]:0)}break;case"coronal":s=i.width,o=i.depth;for(let c=0;c<o;c++)for(let l=0;l<s;l++){const h=c*i.width*i.height+t*i.width+l;a.push(h<r.length?r[h]:0)}break}return new Uint8Array(a)}hasSegmentation(){return this.segmentationData!==null}getMaxSegLabels(){return wi}dispose(){this.dataTexture3D?.dispose(),this.transferFunctionTexture?.dispose(),this.segmentationTexture3D?.dispose(),this.segmentationLUTTexture?.dispose()}}const Rc={type:"change"},Aa={type:"start"},Cc={type:"end"},is=new no,Ic=new bn,pv=Math.cos(70*rm.DEG2RAD);class mv extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",be),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Rc),i.update(),s=r.NONE},this.update=function(){const w=new D,ne=new ni().setFromUnitVectors(e.up,new D(0,1,0)),xe=ne.clone().invert(),de=new D,Q=new ni,C=new D,ie=2*Math.PI;return function(Ae=null){const ye=i.object.position;w.copy(ye).sub(i.target),w.applyQuaternion(ne),a.setFromVector3(w),i.autoRotate&&s===r.NONE&&W(y(Ae)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let We=i.minAzimuthAngle,Xe=i.maxAzimuthAngle;isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=ie:We>Math.PI&&(We-=ie),Xe<-Math.PI?Xe+=ie:Xe>Math.PI&&(Xe-=ie),We<=Xe?a.theta=Math.max(We,Math.min(Xe,a.theta)):a.theta=a.theta>(We+Xe)/2?Math.max(We,a.theta):Math.min(Xe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*l),w.setFromSpherical(a),w.applyQuaternion(xe),ye.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let rt=!1;if(i.zoomToCursor&&R){let at=null;if(i.object.isPerspectiveCamera){const Ye=w.length();at=Z(Ye*l);const lt=Ye-at;i.object.position.addScaledVector(M,lt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ye=new D(I.x,I.y,0);Ye.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),rt=!0;const lt=new D(I.x,I.y,0);lt.unproject(i.object),i.object.position.sub(lt).add(Ye),i.object.updateMatrixWorld(),at=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;at!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(at).add(i.object.position):(is.origin.copy(i.object.position),is.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(is.direction))<pv?e.lookAt(i.target):(Ic.setFromNormalAndCoplanarPoint(i.object.up,i.target),is.intersectPlane(Ic,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),rt=!0);return l=1,R=!1,rt||de.distanceToSquared(i.object.position)>o||8*(1-Q.dot(i.object.quaternion))>o||C.distanceToSquared(i.target)>0?(i.dispatchEvent(Rc),de.copy(i.object.position),Q.copy(i.object.quaternion),C.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ze),i.domElement.removeEventListener("pointerdown",T),i.domElement.removeEventListener("pointercancel",F),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",F),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",be),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new wc,c=new wc;let l=1;const h=new D,d=new ke,u=new ke,p=new ke,_=new ke,g=new ke,m=new ke,f=new ke,b=new ke,x=new ke,M=new D,I=new ke;let R=!1;const A=[],k={};let S=!1;function y(w){return w!==null?2*Math.PI/60*i.autoRotateSpeed*w:2*Math.PI/60/60*i.autoRotateSpeed}function P(w){const ne=Math.abs(w*.01);return Math.pow(.95,i.zoomSpeed*ne)}function W(w){c.theta-=w}function $(w){c.phi-=w}const L=function(){const w=new D;return function(xe,de){w.setFromMatrixColumn(de,0),w.multiplyScalar(-xe),h.add(w)}}(),N=function(){const w=new D;return function(xe,de){i.screenSpacePanning===!0?w.setFromMatrixColumn(de,1):(w.setFromMatrixColumn(de,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(xe),h.add(w)}}(),V=function(){const w=new D;return function(xe,de){const Q=i.domElement;if(i.object.isPerspectiveCamera){const C=i.object.position;w.copy(C).sub(i.target);let ie=w.length();ie*=Math.tan(i.object.fov/2*Math.PI/180),L(2*xe*ie/Q.clientHeight,i.object.matrix),N(2*de*ie/Q.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(L(xe*(i.object.right-i.object.left)/i.object.zoom/Q.clientWidth,i.object.matrix),N(de*(i.object.top-i.object.bottom)/i.object.zoom/Q.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(w,ne){if(!i.zoomToCursor)return;R=!0;const xe=i.domElement.getBoundingClientRect(),de=w-xe.left,Q=ne-xe.top,C=xe.width,ie=xe.height;I.x=de/C*2-1,I.y=-(Q/ie)*2+1,M.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(w){return Math.max(i.minDistance,Math.min(i.maxDistance,w))}function re(w){d.set(w.clientX,w.clientY)}function se(w){q(w.clientX,w.clientX),f.set(w.clientX,w.clientY)}function G(w){_.set(w.clientX,w.clientY)}function K(w){u.set(w.clientX,w.clientY),p.subVectors(u,d).multiplyScalar(i.rotateSpeed);const ne=i.domElement;W(2*Math.PI*p.x/ne.clientHeight),$(2*Math.PI*p.y/ne.clientHeight),d.copy(u),i.update()}function ce(w){b.set(w.clientX,w.clientY),x.subVectors(b,f),x.y>0?Y(P(x.y)):x.y<0&&X(P(x.y)),f.copy(b),i.update()}function ve(w){g.set(w.clientX,w.clientY),m.subVectors(g,_).multiplyScalar(i.panSpeed),V(m.x,m.y),_.copy(g),i.update()}function ge(w){q(w.clientX,w.clientY),w.deltaY<0?X(P(w.deltaY)):w.deltaY>0&&Y(P(w.deltaY)),i.update()}function Le(w){let ne=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),ne=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),ne=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),ne=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),ne=!0;break}ne&&(w.preventDefault(),i.update())}function De(w){if(A.length===1)d.set(w.pageX,w.pageY);else{const ne=he(w),xe=.5*(w.pageX+ne.x),de=.5*(w.pageY+ne.y);d.set(xe,de)}}function Te(w){if(A.length===1)_.set(w.pageX,w.pageY);else{const ne=he(w),xe=.5*(w.pageX+ne.x),de=.5*(w.pageY+ne.y);_.set(xe,de)}}function Ge(w){const ne=he(w),xe=w.pageX-ne.x,de=w.pageY-ne.y,Q=Math.sqrt(xe*xe+de*de);f.set(0,Q)}function O(w){i.enableZoom&&Ge(w),i.enablePan&&Te(w)}function gt(w){i.enableZoom&&Ge(w),i.enableRotate&&De(w)}function Ee(w){if(A.length==1)u.set(w.pageX,w.pageY);else{const xe=he(w),de=.5*(w.pageX+xe.x),Q=.5*(w.pageY+xe.y);u.set(de,Q)}p.subVectors(u,d).multiplyScalar(i.rotateSpeed);const ne=i.domElement;W(2*Math.PI*p.x/ne.clientHeight),$(2*Math.PI*p.y/ne.clientHeight),d.copy(u)}function Re(w){if(A.length===1)g.set(w.pageX,w.pageY);else{const ne=he(w),xe=.5*(w.pageX+ne.x),de=.5*(w.pageY+ne.y);g.set(xe,de)}m.subVectors(g,_).multiplyScalar(i.panSpeed),V(m.x,m.y),_.copy(g)}function me(w){const ne=he(w),xe=w.pageX-ne.x,de=w.pageY-ne.y,Q=Math.sqrt(xe*xe+de*de);b.set(0,Q),x.set(0,Math.pow(b.y/f.y,i.zoomSpeed)),Y(x.y),f.copy(b);const C=(w.pageX+ne.x)*.5,ie=(w.pageY+ne.y)*.5;q(C,ie)}function Qe(w){i.enableZoom&&me(w),i.enablePan&&Re(w)}function Ue(w){i.enableZoom&&me(w),i.enableRotate&&Ee(w)}function T(w){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",v),i.domElement.addEventListener("pointerup",F)),ze(w),w.pointerType==="touch"?Ne(w):ee(w))}function v(w){i.enabled!==!1&&(w.pointerType==="touch"?j(w):J(w))}function F(w){Ce(w),A.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",F)),i.dispatchEvent(Cc),s=r.NONE}function ee(w){let ne;switch(w.button){case 0:ne=i.mouseButtons.LEFT;break;case 1:ne=i.mouseButtons.MIDDLE;break;case 2:ne=i.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case ci.DOLLY:if(i.enableZoom===!1)return;se(w),s=r.DOLLY;break;case ci.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;G(w),s=r.PAN}else{if(i.enableRotate===!1)return;re(w),s=r.ROTATE}break;case ci.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;re(w),s=r.ROTATE}else{if(i.enablePan===!1)return;G(w),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Aa)}function J(w){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(w);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(w);break;case r.PAN:if(i.enablePan===!1)return;ve(w);break}}function te(w){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(w.preventDefault(),i.dispatchEvent(Aa),ge(_e(w)),i.dispatchEvent(Cc))}function _e(w){const ne=w.deltaMode,xe={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(ne){case 1:xe.deltaY*=16;break;case 2:xe.deltaY*=100;break}return w.ctrlKey&&!S&&(xe.deltaY*=10),xe}function le(w){w.key==="Control"&&(S=!0,document.addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(w){w.key==="Control"&&(S=!1,document.removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function be(w){i.enabled===!1||i.enablePan===!1||Le(w)}function Ne(w){switch(Me(w),A.length){case 1:switch(i.touches.ONE){case hi.ROTATE:if(i.enableRotate===!1)return;De(w),s=r.TOUCH_ROTATE;break;case hi.PAN:if(i.enablePan===!1)return;Te(w),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case hi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;O(w),s=r.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;gt(w),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Aa)}function j(w){switch(Me(w),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(w),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Re(w),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Qe(w),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(w),i.update();break;default:s=r.NONE}}function Ze(w){i.enabled!==!1&&w.preventDefault()}function ze(w){A.push(w.pointerId)}function Ce(w){delete k[w.pointerId];for(let ne=0;ne<A.length;ne++)if(A[ne]==w.pointerId){A.splice(ne,1);return}}function Me(w){let ne=k[w.pointerId];ne===void 0&&(ne=new ke,k[w.pointerId]=ne),ne.set(w.pageX,w.pageY)}function he(w){const ne=w.pointerId===A[0]?A[1]:A[0];return k[ne]}i.domElement.addEventListener("contextmenu",Ze),i.domElement.addEventListener("pointerdown",T),i.domElement.addEventListener("pointercancel",F),i.domElement.addEventListener("wheel",te,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const _v=`
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  
  void main() {
    vLocalPosition = position * 0.5 + 0.5;
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,gv=`
  precision highp float;
  precision highp sampler3D;
  
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  
  uniform sampler3D uVolumeTexture;
  uniform sampler2D uTransferFunction;
  uniform sampler3D uSegmentationTexture;
  uniform sampler2D uSegmentationLUT;
  uniform vec3 uVolumeSize;
  uniform vec3 uCameraPosition;
  uniform float uStepSize;
  uniform float uWindowMin;
  uniform float uWindowMax;
  uniform float uIsoValue;
  uniform int uRenderMode;
  uniform float uBrightness;
  uniform float uDensity;
  uniform bool uHasSegmentation;
  uniform float uSegBlendFactor;
  
  const int MAX_STEPS = 512;
  
  vec2 intersectBox(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {
    vec3 tMin = (boxMin - rayOrigin) / rayDir;
    vec3 tMax = (boxMax - rayOrigin) / rayDir;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMin, tMax);
    float tNear = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);
    return vec2(tNear, tFar);
  }
  
  float getVolumeValue(vec3 texCoord) {
    float value = texture(uVolumeTexture, texCoord).r;
    float windowRange = uWindowMax - uWindowMin;
    if (windowRange < 0.001) {
      return step(uWindowMin, value);
    }
    return clamp((value - uWindowMin) / windowRange, 0.0, 1.0);
  }
  
  vec4 applyTransferFunction(float value) {
    return texture2D(uTransferFunction, vec2(value, 0.5));
  }
  
  vec4 getSegmentationColor(vec3 texCoord) {
    if (!uHasSegmentation) return vec4(0.0);
    float label = texture(uSegmentationTexture, texCoord).r;
    if (label < 0.5) return vec4(0.0);
    float lutCoord = (label + 0.5) / 32.0;
    vec4 lutEntry = texture2D(uSegmentationLUT, vec2(lutCoord, 0.5));
    return lutEntry;
  }
  
  vec4 blendSegmentation(vec4 baseColor, vec4 segColor) {
    if (segColor.a < 0.01) return baseColor;
    float alpha = segColor.a * uSegBlendFactor;
    vec3 blended = mix(baseColor.rgb, segColor.rgb, alpha);
    return vec4(blended, baseColor.a);
  }
  
  vec4 rayCastMIP(vec3 rayOrigin, vec3 rayDir, float tNear, float tFar) {
    float maxValue = 0.0;
    vec3 maxPos = rayOrigin;
    float t = tNear;
    float stepSize = uStepSize * 0.5;
    
    for (int i = 0; i < MAX_STEPS; i++) {
      if (t > tFar) break;
      
      vec3 pos = rayOrigin + rayDir * t;
      float value = getVolumeValue(pos);
      if (value > maxValue) {
        maxValue = value;
        maxPos = pos;
      }
      
      t += stepSize;
    }
    
    vec4 color = applyTransferFunction(maxValue);
    
    if (uHasSegmentation) {
      vec4 segColor = getSegmentationColor(maxPos);
      color = blendSegmentation(color, segColor);
    }
    
    return color;
  }
  
  vec4 rayCastComposite(vec3 rayOrigin, vec3 rayDir, float tNear, float tFar) {
    vec4 result = vec4(0.0);
    float t = tNear;
    float stepSize = uStepSize;
    
    for (int i = 0; i < MAX_STEPS; i++) {
      if (t > tFar || result.a >= 0.99) break;
      
      vec3 pos = rayOrigin + rayDir * t;
      float value = getVolumeValue(pos);
      vec4 color = applyTransferFunction(value);
      
      if (uHasSegmentation) {
        vec4 segColor = getSegmentationColor(pos);
        color = blendSegmentation(color, segColor);
      }
      
      color.a *= stepSize * uDensity * 100.0;
      color.rgb *= color.a;
      
      result = result + color * (1.0 - result.a);
      
      t += stepSize;
    }
    
    result.rgb *= uBrightness;
    return result;
  }
  
  vec4 rayCastIsoSurface(vec3 rayOrigin, vec3 rayDir, float tNear, float tFar) {
    float t = tNear;
    float stepSize = uStepSize * 0.5;
    float prevValue = getVolumeValue(rayOrigin + rayDir * tNear);
    
    for (int i = 0; i < MAX_STEPS; i++) {
      if (t > tFar) break;
      
      vec3 pos = rayOrigin + rayDir * t;
      float value = getVolumeValue(pos);
      
      if ((prevValue - uIsoValue) * (value - uIsoValue) < 0.0) {
        float isoT = t - stepSize * (value - uIsoValue) / (value - prevValue + 0.0001);
        vec3 isoPos = rayOrigin + rayDir * isoT;
        
        vec3 grad = vec3(
          getVolumeValue(isoPos + vec3(stepSize, 0.0, 0.0)) - getVolumeValue(isoPos - vec3(stepSize, 0.0, 0.0)),
          getVolumeValue(isoPos + vec3(0.0, stepSize, 0.0)) - getVolumeValue(isoPos - vec3(0.0, stepSize, 0.0)),
          getVolumeValue(isoPos + vec3(0.0, 0.0, stepSize)) - getVolumeValue(isoPos - vec3(0.0, 0.0, stepSize))
        );
        grad = normalize(grad + 0.0001);
        
        vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
        float diffuse = max(dot(grad, lightDir), 0.0);
        vec3 viewDir = -rayDir;
        vec3 halfDir = normalize(lightDir + viewDir);
        float specular = pow(max(dot(grad, halfDir), 0.0), 32.0);
        
        vec4 isoColor = applyTransferFunction(uIsoValue);
        
        if (uHasSegmentation) {
          vec4 segColor = getSegmentationColor(isoPos);
          isoColor = blendSegmentation(isoColor, segColor);
        }
        
        vec3 finalColor = isoColor.rgb * (0.3 + 0.7 * diffuse) + vec3(0.5) * specular;
        
        return vec4(finalColor, 1.0);
      }
      
      prevValue = value;
      t += stepSize;
    }
    
    return vec4(0.0);
  }
  
  void main() {
    vec3 boxMin = vec3(0.0);
    vec3 boxMax = vec3(1.0);
    
    vec3 rayOrigin = vLocalPosition;
    vec3 rayDir = normalize(vLocalPosition - (uCameraPosition * 0.5 + 0.5));
    
    vec2 t = intersectBox(rayOrigin, rayDir, boxMin, boxMax);
    float tNear = max(t.x, 0.0);
    float tFar = t.y;
    
    if (tNear > tFar) {
      discard;
    }
    
    vec4 finalColor;
    
    if (uRenderMode == 0) {
      finalColor = rayCastMIP(rayOrigin, rayDir, tNear, tFar);
    } else if (uRenderMode == 1) {
      finalColor = rayCastComposite(rayOrigin, rayDir, tNear, tFar);
    } else {
      finalColor = rayCastIsoSurface(rayOrigin, rayDir, tNear, tFar);
    }
    
    if (finalColor.a < 0.01) {
      discard;
    }
    
    gl_FragColor = finalColor;
  }
`;class xv{constructor(e,t,i={}){pe(this,"container");pe(this,"scene");pe(this,"camera");pe(this,"renderer");pe(this,"controls");pe(this,"volumeMesh",null);pe(this,"volumeTexture");pe(this,"volumeTexture3D");pe(this,"transferFunctionTexture");pe(this,"material",null);pe(this,"animationId",null);pe(this,"segBlendFactor",1);pe(this,"renderMode");pe(this,"stepSize");pe(this,"brightness");pe(this,"density");pe(this,"isoValue");pe(this,"windowLevel");pe(this,"transferFunctionPoints");this.container=e,this.volumeTexture=t,this.renderMode=i.renderMode||"composite",this.stepSize=i.stepSize||.005,this.brightness=i.brightness||1.5,this.density=i.density||1,this.isoValue=i.isoValue||.5,this.windowLevel=t.getDefaultWindowLevel(),this.transferFunctionPoints=t.getDefaultTransferFunction(),this.volumeTexture3D=t.create3DTexture(),this.transferFunctionTexture=t.createTransferFunctionTexture(this.transferFunctionPoints),this.scene=new iu,this.scene.background=new Ke(1710638),this.camera=new Vt(45,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,0,3),this.renderer=new ro({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.controls=new mv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=1.5,this.controls.maxDistance=10,this.createVolumeMesh(),this.addBoundingBox(),this.setupEventListeners(),this.startAnimation()}createVolumeMesh(){const e=this.volumeTexture.getVolumeSize(),t=new ii(e.x,e.y,e.z),i=this.renderMode==="mip"?0:this.renderMode==="composite"?1:2,r=this.volumeTexture.getMaxSegLabels(),s=new _s(new Uint8Array(1),1,1,1);s.format=hs,s.type=Ct,s.minFilter=Je,s.magFilter=Je,s.needsUpdate=!0;const o=new pr(new Uint8Array(r*4),r,1);o.format=bt,o.type=Ct,o.minFilter=Je,o.magFilter=Je,o.needsUpdate=!0,this.material=new Nn({vertexShader:_v,fragmentShader:gv,uniforms:{uVolumeTexture:{value:this.volumeTexture3D},uTransferFunction:{value:this.transferFunctionTexture},uSegmentationTexture:{value:s},uSegmentationLUT:{value:o},uVolumeSize:{value:new D(e.x,e.y,e.z)},uCameraPosition:{value:new D},uStepSize:{value:this.stepSize},uWindowMin:{value:0},uWindowMax:{value:1},uIsoValue:{value:this.isoValue},uRenderMode:{value:i},uBrightness:{value:this.brightness},uDensity:{value:this.density},uHasSegmentation:{value:!1},uSegBlendFactor:{value:this.segBlendFactor}},side:Rt,transparent:!0}),this.volumeMesh=new $t(t,this.material),this.scene.add(this.volumeMesh),this.setWindowLevel(this.windowLevel)}setSegmentation(e){if(!this.material)return;const t=this.volumeTexture.createSegmentation3DTexture();if(!t)return;const i=this.volumeTexture.createSegmentationLUT(e),r=this.material.uniforms.uSegmentationTexture.value,s=this.material.uniforms.uSegmentationLUT.value;r.dispose(),s.dispose(),this.material.uniforms.uSegmentationTexture.value=t,this.material.uniforms.uSegmentationLUT.value=i,this.material.uniforms.uHasSegmentation.value=!0}updateSegmentationLabels(e){this.volumeTexture.updateSegmentationLUT(e)}setSegBlendFactor(e){this.segBlendFactor=e,this.material&&(this.material.uniforms.uSegBlendFactor.value=e)}removeSegmentation(){this.material&&(this.material.uniforms.uHasSegmentation.value=!1)}addBoundingBox(){const e=this.volumeTexture.getVolumeSize(),t=new ii(e.x,e.y,e.z),i=new dv(t),r=new ru({color:6710886,transparent:!0,opacity:.3}),s=new uv(i,r);this.scene.add(s)}setupEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}onResize(){this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)}startAnimation(){const e=()=>{this.animationId=requestAnimationFrame(e),this.material&&this.material.uniforms.uCameraPosition.value.copy(this.camera.position),this.controls.update(),this.renderer.render(this.scene,this.camera)};e()}setRenderMode(e){if(this.renderMode=e,this.material){const t=e==="mip"?0:e==="composite"?1:2;this.material.uniforms.uRenderMode.value=t}}setStepSize(e){this.stepSize=e,this.material&&(this.material.uniforms.uStepSize.value=e)}setBrightness(e){this.brightness=e,this.material&&(this.material.uniforms.uBrightness.value=e)}setDensity(e){this.density=e,this.material&&(this.material.uniforms.uDensity.value=e)}setIsoValue(e){this.isoValue=e,this.material&&(this.material.uniforms.uIsoValue.value=e)}setWindowLevel(e){this.windowLevel=e;const t=this.volumeTexture.getValueRange(),i=t.max-t.min;if(i<=0||this.material===null)return;const r=(e.level-e.window/2-t.min)/i,s=(e.level+e.window/2-t.min)/i;this.material.uniforms.uWindowMin.value=Math.max(0,Math.min(1,r)),this.material.uniforms.uWindowMax.value=Math.max(0,Math.min(1,s))}setTransferFunction(e){this.transferFunctionPoints=e,this.transferFunctionTexture.dispose(),this.transferFunctionTexture=this.volumeTexture.createTransferFunctionTexture(e),this.material&&(this.material.uniforms.uTransferFunction.value=this.transferFunctionTexture)}resetCamera(){this.camera.position.set(0,0,3),this.controls.reset()}getRenderMode(){return this.renderMode}getWindowLevel(){return this.windowLevel}getTransferFunction(){return this.transferFunctionPoints}getControls(){return this.controls}getCamera(){return this.camera}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onResize.bind(this)),this.volumeMesh?.geometry.dispose(),this.material?.dispose(),this.volumeTexture3D.dispose(),this.transferFunctionTexture.dispose(),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}class vv{constructor(e,t,i,r,s){pe(this,"container");pe(this,"canvas");pe(this,"ctx");pe(this,"points");pe(this,"histogram");pe(this,"selectedPoint",null);pe(this,"isDragging",!1);pe(this,"onChange");pe(this,"valueRange");this.container=e,this.points=[...t],this.histogram=i,this.valueRange=r,this.onChange=s,this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.cursor="crosshair",this.container.appendChild(this.canvas);const o=this.canvas.getContext("2d");if(!o)throw new Error("Failed to get 2D context");this.ctx=o,this.resizeCanvas(),this.setupEventListeners(),this.render()}resizeCanvas(){const e=window.devicePixelRatio||1,t=this.container.getBoundingClientRect();this.canvas.width=t.width*e,this.canvas.height=t.height*e,this.ctx.scale(e,e)}setupEventListeners(){this.canvas.addEventListener("mousedown",this.onMouseDown.bind(this)),this.canvas.addEventListener("mousemove",this.onMouseMove.bind(this)),this.canvas.addEventListener("mouseup",this.onMouseUp.bind(this)),this.canvas.addEventListener("mouseleave",this.onMouseUp.bind(this)),this.canvas.addEventListener("dblclick",this.onDoubleClick.bind(this)),window.addEventListener("resize",()=>{this.resizeCanvas(),this.render()})}getCanvasCoords(){return{width:this.canvas.width/(window.devicePixelRatio||1),height:this.canvas.height/(window.devicePixelRatio||1)}}onMouseDown(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top,{width:s,height:o}=this.getCanvasCoords();for(let c=0;c<this.points.length;c++){const l=this.points[c],h=l.value*s,d=(1-l.opacity)*o;if(Math.sqrt((i-h)**2+(r-d)**2)<10){this.selectedPoint=c,this.isDragging=!0;return}}const a={value:Math.max(0,Math.min(1,i/s)),color:{r:128,g:128,b:128},opacity:Math.max(0,Math.min(1,1-r/o))};this.points.push(a),this.points.sort((c,l)=>c.value-l.value),this.selectedPoint=this.points.indexOf(a),this.isDragging=!0,this.notifyChange(),this.render()}onMouseMove(e){if(!this.isDragging||this.selectedPoint===null)return;const t=this.canvas.getBoundingClientRect(),{width:i,height:r}=this.getCanvasCoords();let s=e.clientX-t.left,o=e.clientY-t.top;s=Math.max(5,Math.min(i-5,s)),o=Math.max(5,Math.min(r-5,o));const a=this.points[this.selectedPoint],c=this.selectedPoint>0?this.points[this.selectedPoint-1].value+.01:0,l=this.selectedPoint<this.points.length-1?this.points[this.selectedPoint+1].value-.01:1;a.value=Math.max(c,Math.min(l,s/i)),a.opacity=Math.max(0,Math.min(1,1-o/r)),this.notifyChange(),this.render()}onMouseUp(){this.isDragging=!1}onDoubleClick(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top,{width:s,height:o}=this.getCanvasCoords();for(let a=1;a<this.points.length-1;a++){const c=this.points[a],l=c.value*s,h=(1-c.opacity)*o;if(Math.sqrt((i-l)**2+(r-h)**2)<10){e.preventDefault(),this.points.splice(a,1),this.selectedPoint=null,this.notifyChange(),this.render();return}}for(let a=0;a<this.points.length;a++){const c=this.points[a],l=c.value*s,h=(1-c.opacity)*o;if(Math.sqrt((i-l)**2+(r-h)**2)<10){const u=this.promptColor(c.color);u&&(c.color=u,this.notifyChange(),this.render());return}}}promptColor(e){const t=prompt("Red (0-255):",e.r.toString()),i=prompt("Green (0-255):",e.g.toString()),r=prompt("Blue (0-255):",e.b.toString());return t===null||i===null||r===null?null:{r:Math.max(0,Math.min(255,parseInt(t)||0)),g:Math.max(0,Math.min(255,parseInt(i)||0)),b:Math.max(0,Math.min(255,parseInt(r)||0))}}notifyChange(){this.onChange([...this.points])}render(){const{width:e,height:t}=this.getCanvasCoords(),i=this.ctx;if(i.clearRect(0,0,e,t),i.fillStyle="#1a1a2e",i.fillRect(0,0,e,t),this.histogram.length>0){const o=Math.max(...this.histogram);i.fillStyle="rgba(100, 100, 150, 0.3)";for(let a=0;a<this.histogram.length;a++){const c=e/this.histogram.length,l=this.histogram[a]/o*t;i.fillRect(a*c,t-l,c,l)}}const r=i.createLinearGradient(0,0,e,0);for(const o of this.points){const a=`rgb(${o.color.r}, ${o.color.g}, ${o.color.b})`;r.addColorStop(o.value,a)}i.globalAlpha=.3,i.fillStyle=r,i.fillRect(0,t*.85,e,t*.15),i.globalAlpha=1,i.beginPath(),i.moveTo(0,t-this.points[0].opacity*t);for(let o=1;o<this.points.length;o++){const a=this.points[o].value*e,c=t-this.points[o].opacity*t;i.lineTo(a,c)}i.lineTo(e,t),i.lineTo(0,t),i.closePath();const s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(100, 150, 255, 0.4)"),s.addColorStop(1,"rgba(100, 150, 255, 0.1)"),i.fillStyle=s,i.fill(),i.beginPath(),i.moveTo(0,t-this.points[0].opacity*t);for(let o=1;o<this.points.length;o++){const a=this.points[o].value*e,c=t-this.points[o].opacity*t;i.lineTo(a,c)}i.strokeStyle="#6496ff",i.lineWidth=2,i.stroke();for(let o=0;o<this.points.length;o++){const a=this.points[o],c=a.value*e,l=t-a.opacity*t;i.beginPath(),i.arc(c,l,this.selectedPoint===o?8:5,0,Math.PI*2),i.fillStyle=`rgb(${a.color.r}, ${a.color.g}, ${a.color.b})`,i.fill(),i.strokeStyle=this.selectedPoint===o?"#fff":"#666",i.lineWidth=2,i.stroke()}i.fillStyle="#999",i.font="11px sans-serif",i.textAlign="left",i.fillText(this.formatValue(this.valueRange.min),5,t-5),i.textAlign="right",i.fillText(this.formatValue(this.valueRange.max),e-5,t-5)}formatValue(e){return Math.abs(e)>=1e3?e.toFixed(0):e.toFixed(1)}setPoints(e){this.points=[...e],this.render()}getPoints(){return[...this.points]}dispose(){this.container.removeChild(this.canvas)}}class Sv{constructor(e,t,i,r){pe(this,"container");pe(this,"scene");pe(this,"camera");pe(this,"renderer");pe(this,"volumeTexture");pe(this,"plane");pe(this,"sliceIndex");pe(this,"sliceMesh",null);pe(this,"sliceTexture",null);pe(this,"segOverlayMesh",null);pe(this,"segOverlayTexture",null);pe(this,"windowMin");pe(this,"windowMax");pe(this,"isDragging",!1);pe(this,"lastMouseY",0);pe(this,"onSliceChange");pe(this,"segLabels",[]);pe(this,"segVisible",!1);this.container=e,this.volumeTexture=t,this.plane=i,this.onSliceChange=r;const s=t.getValueRange();this.windowMin=s.min,this.windowMax=s.max,this.sliceIndex=Math.floor(this.getMaxSlice()/2),this.scene=new iu,this.scene.background=new Ke(657940),this.camera=new Kh(-1,1,1,-1,.1,100),this.camera.position.z=1,this.renderer=new ro({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.createSliceMesh(),this.setupEventListeners(),this.onResize(),this.render()}getMaxSlice(){const e=this.volumeTexture.getDimensions();switch(this.plane){case"axial":return e.depth;case"sagittal":return e.width;case"coronal":return e.height}}getSliceDimensions(){const e=this.volumeTexture.getDimensions();switch(this.plane){case"axial":return{width:e.width,height:e.height};case"sagittal":return{width:e.height,height:e.depth};case"coronal":return{width:e.width,height:e.depth}}}createSliceMesh(){const{width:e,height:t}=this.getSliceDimensions(),i=this.volumeTexture.getSlice(this.plane,this.sliceIndex),r=this.volumeTexture.getValueRange(),s=r.max-r.min,o=new Uint8Array(e*t*4);for(let l=0;l<e*t;l++){const h=i[l]/255;let d;if(s>0){const p=(this.windowMin-r.min)/s,g=(this.windowMax-r.min)/s-p;d=g>0?Math.max(0,Math.min(1,(h-p)/g)):0}else d=h;const u=Math.floor(d*255);o[l*4]=u,o[l*4+1]=u,o[l*4+2]=u,o[l*4+3]=255}this.sliceTexture=new pr(o,e,t),this.sliceTexture.format=bt,this.sliceTexture.type=Ct,this.sliceTexture.minFilter=mt,this.sliceTexture.magFilter=mt,this.sliceTexture.wrapS=tt,this.sliceTexture.wrapT=tt,this.sliceTexture.needsUpdate=!0;const a=new fr(2,2),c=new gs({map:this.sliceTexture});this.sliceMesh=new $t(a,c),this.scene.add(this.sliceMesh)}createSegOverlay(){if(this.segOverlayMesh&&(this.scene.remove(this.segOverlayMesh),this.segOverlayMesh.geometry.dispose(),this.segOverlayMesh.material.dispose(),this.segOverlayTexture?.dispose(),this.segOverlayMesh=null,this.segOverlayTexture=null),!this.segVisible||!this.volumeTexture.hasSegmentation())return;const{width:e,height:t}=this.getSliceDimensions(),i=this.volumeTexture.getSegmentationSlice(this.plane,this.sliceIndex);if(!i)return;const r=new Uint8Array(e*t*4);for(let a=0;a<e*t;a++){const c=i[a];if(c===0){r[a*4]=0,r[a*4+1]=0,r[a*4+2]=0,r[a*4+3]=0;continue}const l=this.segLabels.find(h=>h.id===c);if(!l||!l.visible){r[a*4]=0,r[a*4+1]=0,r[a*4+2]=0,r[a*4+3]=0;continue}r[a*4]=l.color.r,r[a*4+1]=l.color.g,r[a*4+2]=l.color.b,r[a*4+3]=Math.floor(l.opacity*255)}this.segOverlayTexture=new pr(r,e,t),this.segOverlayTexture.format=bt,this.segOverlayTexture.type=Ct,this.segOverlayTexture.minFilter=Je,this.segOverlayTexture.magFilter=Je,this.segOverlayTexture.wrapS=tt,this.segOverlayTexture.wrapT=tt,this.segOverlayTexture.needsUpdate=!0;const s=new fr(2,2),o=new gs({map:this.segOverlayTexture,transparent:!0,depthTest:!1});this.segOverlayMesh=new $t(s,o),this.scene.add(this.segOverlayMesh)}updateSliceTexture(){if(!this.sliceMesh||!this.sliceTexture)return;const{width:e,height:t}=this.getSliceDimensions(),i=this.volumeTexture.getSlice(this.plane,this.sliceIndex),r=this.volumeTexture.getValueRange(),s=r.max-r.min,o=s>0?(this.windowMin-r.min)/s:0,c=(s>0?(this.windowMax-r.min)/s:1)-o,l=this.sliceTexture.image.data;for(let h=0;h<e*t;h++){const d=i[h]/255,u=c>0?Math.max(0,Math.min(1,(d-o)/c)):d,p=Math.floor(u*255);l[h*4]=p,l[h*4+1]=p,l[h*4+2]=p}this.sliceTexture.needsUpdate=!0}setupEventListeners(){window.addEventListener("resize",this.onResize.bind(this));const e=this.renderer.domElement;e.style.cursor="pointer",e.addEventListener("mousedown",t=>{this.isDragging=!0,this.lastMouseY=t.clientY}),e.addEventListener("mousemove",t=>{if(!this.isDragging)return;const i=t.clientY-this.lastMouseY,r=Math.round(i/10);if(Math.abs(r)>=1){const s=this.getMaxSlice()-1;this.sliceIndex=Math.max(0,Math.min(s,this.sliceIndex-r)),this.lastMouseY=t.clientY,this.updateSliceTexture(),this.createSegOverlay(),this.onSliceChange(this.sliceIndex),this.render()}}),e.addEventListener("mouseup",()=>{this.isDragging=!1}),e.addEventListener("mouseleave",()=>{this.isDragging=!1}),e.addEventListener("wheel",t=>{t.preventDefault();const i=this.getMaxSlice()-1,r=t.deltaY>0?1:-1;this.sliceIndex=Math.max(0,Math.min(i,this.sliceIndex+r)),this.updateSliceTexture(),this.createSegOverlay(),this.onSliceChange(this.sliceIndex),this.render()})}onResize(){const e=this.container.getBoundingClientRect();this.renderer.setSize(e.width,e.height);const{width:t,height:i}=this.getSliceDimensions(),r=t/i,s=e.width/e.height;r>s?(this.camera.left=-1,this.camera.right=1,this.camera.top=1/r*s,this.camera.bottom=-1/r*s):(this.camera.left=-r/s,this.camera.right=r/s,this.camera.top=1,this.camera.bottom=-1),this.camera.updateProjectionMatrix(),this.render()}setSliceIndex(e){const t=this.getMaxSlice()-1;this.sliceIndex=Math.max(0,Math.min(t,e)),this.updateSliceTexture(),this.createSegOverlay(),this.render()}getSliceIndex(){return this.sliceIndex}setWindowLevel(e,t){this.windowMin=e,this.windowMax=t,this.updateSliceTexture(),this.render()}setSegmentationLabels(e){this.segLabels=e,this.segVisible=e.length>0&&this.volumeTexture.hasSegmentation(),this.createSegOverlay(),this.render()}updateSegmentationLabels(e){this.segLabels=e,this.createSegOverlay(),this.render()}removeSegmentation(){this.segVisible=!1,this.segLabels=[],this.createSegOverlay(),this.render()}getPlane(){return this.plane}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.onResize.bind(this)),this.sliceMesh?.geometry.dispose(),this.sliceMesh?.material?.dispose(),this.sliceTexture?.dispose(),this.segOverlayMesh?.geometry.dispose(),this.segOverlayMesh?.material?.dispose(),this.segOverlayTexture?.dispose(),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}class Mv{constructor(e){pe(this,"container");pe(this,"loader");pe(this,"volumeTexture",null);pe(this,"volumeRenderer",null);pe(this,"tfEditor",null);pe(this,"mprViews",new Map);pe(this,"segLabels",[]);pe(this,"elements",null);this.container=e,this.loader=new ip,this.createUI(),this.loadSyntheticData()}createUI(){this.container.innerHTML=`
      <style>
        .app-container {
          display: flex;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .sidebar {
          width: 320px;
          background: #16162a;
          border-right: 1px solid #2a2a4a;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #2a2a4a;
        }
        
        .sidebar-title {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }
        
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        
        .volume-view {
          flex: 1;
          min-height: 0;
          position: relative;
        }
        
        .mpr-views {
          height: 200px;
          display: flex;
          border-top: 1px solid #2a2a4a;
          flex-shrink: 0;
        }
        
        .mpr-view {
          flex: 1;
          position: relative;
          border-right: 1px solid #2a2a4a;
        }
        
        .mpr-view:last-child {
          border-right: none;
        }
        
        .mpr-label {
          position: absolute;
          top: 8px;
          left: 8px;
          font-size: 11px;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          padding: 2px 8px;
          border-radius: 4px;
          pointer-events: none;
        }
        
        .mpr-index {
          position: absolute;
          bottom: 8px;
          right: 8px;
          font-size: 11px;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          padding: 2px 8px;
          border-radius: 4px;
          pointer-events: none;
        }
        
        .tf-editor-container {
          height: 140px;
          background: #1a1a2e;
          border-radius: 6px;
          overflow: hidden;
        }
        
        .control-group {
          margin-bottom: 12px;
        }
        
        .control-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #aaa;
          margin-bottom: 6px;
        }
        
        .control-value {
          color: #6496ff;
          font-family: monospace;
        }
        
        input[type="range"] {
          width: 100%;
          height: 4px;
          -webkit-appearance: none;
          background: #2a2a4a;
          border-radius: 2px;
          outline: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          background: #6496ff;
          border-radius: 50%;
          cursor: pointer;
        }
        
        select {
          width: 100%;
          padding: 8px 12px;
          background: #2a2a4a;
          border: 1px solid #3a3a5a;
          border-radius: 6px;
          color: #fff;
          font-size: 13px;
          cursor: pointer;
        }
        
        select:focus {
          outline: none;
          border-color: #6496ff;
        }
        
        .file-input-label {
          display: block;
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #6496ff, #8b5cf6);
          border-radius: 6px;
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        
        .file-input-label:hover {
          opacity: 0.9;
        }
        
        .seg-file-input-label {
          display: block;
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          border-radius: 6px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        
        .seg-file-input-label:hover {
          opacity: 0.9;
        }
        
        input[type="file"] {
          display: none;
        }
        
        .info-text {
          font-size: 11px;
          color: #888;
          line-height: 1.6;
        }
        
        .info-text span {
          color: #aaa;
          font-family: monospace;
        }
        
        .preset-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .preset-btn {
          padding: 6px 12px;
          background: #2a2a4a;
          border: 1px solid #3a3a5a;
          border-radius: 4px;
          color: #fff;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .preset-btn:hover {
          background: #3a3a5a;
          border-color: #6496ff;
        }

        .seg-labels-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 8px;
        }

        .seg-label-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: #1a1a2e;
          border-radius: 4px;
          font-size: 11px;
        }

        .seg-label-color {
          width: 16px;
          height: 16px;
          border-radius: 3px;
          border: 1px solid #3a3a5a;
          flex-shrink: 0;
          cursor: pointer;
        }

        .seg-label-name {
          flex: 1;
          color: #ccc;
        }

        .seg-label-opacity {
          width: 60px;
          height: 3px;
          -webkit-appearance: none;
          background: #2a2a4a;
          border-radius: 2px;
          outline: none;
        }

        .seg-label-opacity::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 10px;
          height: 10px;
          background: #6496ff;
          border-radius: 50%;
          cursor: pointer;
        }

        .seg-toggle {
          position: relative;
          width: 30px;
          height: 16px;
          background: #2a2a4a;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .seg-toggle.active {
          background: #6496ff;
        }

        .seg-toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          transition: transform 0.2s;
        }

        .seg-toggle.active::after {
          transform: translateX(14px);
        }

        .seg-remove-btn {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          font-size: 14px;
          padding: 0 2px;
          line-height: 1;
        }

        .seg-remove-btn:hover {
          color: #ff6b6b;
        }

        .seg-empty-msg {
          font-size: 11px;
          color: #555;
          text-align: center;
          padding: 12px 0;
        }
      </style>
      
      <div class="app-container">
        <div class="sidebar">
          <div class="sidebar-section">
            <div class="sidebar-title">数据加载</div>
            <label class="file-input-label">
              <input type="file" id="fileInput" accept=".nii,.nii.gz">
              加载 NIfTI 文件 (.nii, .nii.gz)
            </label>
            <div style="margin-top: 12px; padding: 10px; background: #1a1a2e; border-radius: 6px;">
              <div class="info-text" id="infoDisplay">
                尺寸: <span>-</span><br>
                体素间距: <span>-</span><br>
                值范围: <span>-</span>
              </div>
            </div>
          </div>

          <div class="sidebar-section">
            <div class="sidebar-title">分割蒙版</div>
            <label class="seg-file-input-label">
              <input type="file" id="segFileInput" accept=".nii,.nii.gz">
              加载分割标签 (.nii, .nii.gz)
            </label>
            <div id="segLabelsContainer">
              <div class="seg-empty-msg">未加载分割文件</div>
            </div>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">渲染模式</div>
            <select id="renderModeSelect">
              <option value="composite">合成渲染 (Composite)</option>
              <option value="mip">最大密度投影 (MIP)</option>
              <option value="iso">等值面 (Iso-surface)</option>
            </select>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">窗宽窗位</div>
            <div class="control-group">
              <div class="control-label">
                <span>窗宽 (Window)</span>
                <span class="control-value" id="windowValue">--</span>
              </div>
              <input type="range" id="windowInput" min="1" max="1000" value="500">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>窗位 (Level)</span>
                <span class="control-value" id="levelValue">--</span>
              </div>
              <input type="range" id="levelInput" min="0" max="1000" value="500">
            </div>
            <div class="preset-buttons">
              <button class="preset-btn" data-preset="brain">脑部</button>
              <button class="preset-btn" data-preset="bone">骨骼</button>
              <button class="preset-btn" data-preset="lung">肺部</button>
              <button class="preset-btn" data-preset="soft">软组织</button>
            </div>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">传递函数</div>
            <div class="tf-editor-container" id="tfContainer"></div>
            <div style="margin-top: 8px; font-size: 10px; color: #666;">
              点击添加点 · 拖拽调节 · 双击删除/改色
            </div>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">渲染参数</div>
            <div class="control-group">
              <div class="control-label">
                <span>亮度</span>
                <span class="control-value" id="brightnessValue">1.5</span>
              </div>
              <input type="range" id="brightnessInput" min="0.1" max="3" step="0.1" value="1.5">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>密度</span>
                <span class="control-value" id="densityValue">1.0</span>
              </div>
              <input type="range" id="densityInput" min="0.1" max="3" step="0.1" value="1.0">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>步长</span>
                <span class="control-value" id="stepSizeValue">0.005</span>
              </div>
              <input type="range" id="stepSizeInput" min="0.001" max="0.02" step="0.001" value="0.005">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>等值面值</span>
                <span class="control-value" id="isoValueValue">0.5</span>
              </div>
              <input type="range" id="isoValueInput" min="0" max="1" step="0.01" value="0.5">
            </div>
            <div class="control-group">
              <div class="control-label">
                <span>分割叠加强度</span>
                <span class="control-value" id="segBlendValue">1.0</span>
              </div>
              <input type="range" id="segBlendInput" min="0" max="1" step="0.05" value="1.0">
            </div>
          </div>
        </div>
        
        <div class="main-content">
          <div class="volume-view" id="volumeContainer"></div>
          <div class="mpr-views" id="mprContainer">
            <div class="mpr-view" data-plane="axial">
              <div class="mpr-label">Axial (横断面)</div>
              <div class="mpr-index" id="axialIndex">0/0</div>
            </div>
            <div class="mpr-view" data-plane="sagittal">
              <div class="mpr-label">Sagittal (矢状面)</div>
              <div class="mpr-index" id="sagittalIndex">0/0</div>
            </div>
            <div class="mpr-view" data-plane="coronal">
              <div class="mpr-label">Coronal (冠状面)</div>
              <div class="mpr-index" id="coronalIndex">0/0</div>
            </div>
          </div>
        </div>
      </div>
    `,this.elements={fileInput:this.container.querySelector("#fileInput"),segFileInput:this.container.querySelector("#segFileInput"),volumeContainer:this.container.querySelector("#volumeContainer"),tfContainer:this.container.querySelector("#tfContainer"),mprContainer:this.container.querySelector("#mprContainer"),renderModeSelect:this.container.querySelector("#renderModeSelect"),windowInput:this.container.querySelector("#windowInput"),levelInput:this.container.querySelector("#levelInput"),brightnessInput:this.container.querySelector("#brightnessInput"),densityInput:this.container.querySelector("#densityInput"),stepSizeInput:this.container.querySelector("#stepSizeInput"),isoValueInput:this.container.querySelector("#isoValueInput"),segBlendInput:this.container.querySelector("#segBlendInput"),windowValueDisplay:this.container.querySelector("#windowValue"),levelValueDisplay:this.container.querySelector("#levelValue"),brightnessValueDisplay:this.container.querySelector("#brightnessValue"),densityValueDisplay:this.container.querySelector("#densityValue"),stepSizeValueDisplay:this.container.querySelector("#stepSizeValue"),isoValueValueDisplay:this.container.querySelector("#isoValueValue"),segBlendValueDisplay:this.container.querySelector("#segBlendValue"),infoDisplay:this.container.querySelector("#infoDisplay"),segLabelsContainer:this.container.querySelector("#segLabelsContainer")},this.setupEventListeners()}setupEventListeners(){this.elements&&(this.elements.fileInput.addEventListener("change",e=>{const t=e.target.files?.[0];t&&this.loadFromFile(t)}),this.elements.segFileInput.addEventListener("change",e=>{const t=e.target.files?.[0];t&&this.loadSegmentationFromFile(t)}),this.elements.renderModeSelect.addEventListener("change",e=>{const t=e.target.value;this.volumeRenderer?.setRenderMode(t)}),this.elements.windowInput.addEventListener("input",()=>{this.updateWindowLevel()}),this.elements.levelInput.addEventListener("input",()=>{this.updateWindowLevel()}),this.elements.brightnessInput.addEventListener("input",()=>{const e=parseFloat(this.elements.brightnessInput.value);this.elements.brightnessValueDisplay.textContent=e.toFixed(1),this.volumeRenderer?.setBrightness(e)}),this.elements.densityInput.addEventListener("input",()=>{const e=parseFloat(this.elements.densityInput.value);this.elements.densityValueDisplay.textContent=e.toFixed(1),this.volumeRenderer?.setDensity(e)}),this.elements.stepSizeInput.addEventListener("input",()=>{const e=parseFloat(this.elements.stepSizeInput.value);this.elements.stepSizeValueDisplay.textContent=e.toFixed(3),this.volumeRenderer?.setStepSize(e)}),this.elements.isoValueInput.addEventListener("input",()=>{const e=parseFloat(this.elements.isoValueInput.value);this.elements.isoValueValueDisplay.textContent=e.toFixed(2),this.volumeRenderer?.setIsoValue(e)}),this.elements.segBlendInput.addEventListener("input",()=>{const e=parseFloat(this.elements.segBlendInput.value);this.elements.segBlendValueDisplay.textContent=e.toFixed(2),this.volumeRenderer?.setSegBlendFactor(e)}),this.container.querySelectorAll(".preset-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.preset;this.applyWindowPreset(t)})}))}async loadSegmentationFromFile(e){if(!this.volumeTexture){alert("请先加载体数据文件");return}try{const t=await this.loader.loadSegmentationFromFile(e);this.segLabels=t.labels,this.volumeTexture.setSegmentation(t),this.volumeRenderer?.setSegmentation(this.segLabels),this.mprViews.forEach(i=>{i.setSegmentationLabels(this.segLabels)}),this.renderSegLabelsUI()}catch(t){console.error("Failed to load segmentation:",t),alert("加载分割文件失败，请检查文件格式")}}renderSegLabelsUI(){if(!this.elements)return;const e=this.elements.segLabelsContainer;if(!this.segLabels.length){e.innerHTML='<div class="seg-empty-msg">未加载分割文件</div>';return}let t='<div class="seg-labels-list">';for(const i of this.segLabels){const r=`rgb(${i.color.r},${i.color.g},${i.color.b})`;t+=`
        <div class="seg-label-item" data-label-id="${i.id}">
          <div class="seg-label-color" style="background:${r}" data-action="color" data-id="${i.id}"></div>
          <span class="seg-label-name" data-action="rename" data-id="${i.id}">${i.name}</span>
          <input type="range" class="seg-label-opacity" min="0" max="1" step="0.05" value="${i.opacity}" data-action="opacity" data-id="${i.id}">
          <div class="seg-toggle ${i.visible?"active":""}" data-action="toggle" data-id="${i.id}"></div>
        </div>
      `}t+="</div>",e.innerHTML=t,e.querySelectorAll('[data-action="toggle"]').forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.id||"0");this.toggleSegLabel(r)})}),e.querySelectorAll('[data-action="opacity"]').forEach(i=>{i.addEventListener("input",()=>{const r=parseInt(i.dataset.id||"0"),s=parseFloat(i.value);this.updateSegLabelOpacity(r,s)})}),e.querySelectorAll('[data-action="color"]').forEach(i=>{i.addEventListener("dblclick",()=>{const r=parseInt(i.dataset.id||"0");this.changeSegLabelColor(r)})}),e.querySelectorAll('[data-action="rename"]').forEach(i=>{i.addEventListener("dblclick",()=>{const r=parseInt(i.dataset.id||"0");this.renameSegLabel(r)})})}toggleSegLabel(e){const t=this.segLabels.find(i=>i.id===e);t&&(t.visible=!t.visible,this.propagateSegUpdate(),this.renderSegLabelsUI())}updateSegLabelOpacity(e,t){const i=this.segLabels.find(r=>r.id===e);i&&(i.opacity=t,this.propagateSegUpdate())}changeSegLabelColor(e){const t=this.segLabels.find(o=>o.id===e);if(!t)return;const i=prompt("Red (0-255):",t.color.r.toString()),r=prompt("Green (0-255):",t.color.g.toString()),s=prompt("Blue (0-255):",t.color.b.toString());i===null||r===null||s===null||(t.color={r:Math.max(0,Math.min(255,parseInt(i)||0)),g:Math.max(0,Math.min(255,parseInt(r)||0)),b:Math.max(0,Math.min(255,parseInt(s)||0))},this.propagateSegUpdate(),this.renderSegLabelsUI())}renameSegLabel(e){const t=this.segLabels.find(r=>r.id===e);if(!t)return;const i=prompt("标签名称:",t.name);i!==null&&(t.name=i||t.name,this.renderSegLabelsUI())}propagateSegUpdate(){this.volumeRenderer?.updateSegmentationLabels(this.segLabels),this.mprViews.forEach(e=>{e.updateSegmentationLabels(this.segLabels)})}applyWindowPreset(e){if(!this.volumeTexture)return;const t=this.volumeTexture.getValueRange();let i,r;switch(e){case"brain":i=80,r=40;break;case"bone":i=1500,r=300;break;case"lung":i=1500,r=-600;break;case"soft":i=350,r=50;break;default:i=t.max-t.min,r=(t.max+t.min)/2}(r<t.min||r>t.max)&&(i=t.max-t.min,r=(t.max+t.min)/2),this.setWindowLevelUI(i,r),this.updateWindowLevel()}setWindowLevelUI(e,t){this.elements&&(this.elements.windowInput.value=e.toString(),this.elements.levelInput.value=t.toString(),this.elements.windowValueDisplay.textContent=e.toFixed(0),this.elements.levelValueDisplay.textContent=t.toFixed(0))}updateWindowLevel(){if(!this.elements||!this.volumeTexture)return;const e=parseFloat(this.elements.windowInput.value),t=parseFloat(this.elements.levelInput.value);this.elements.windowValueDisplay.textContent=e.toFixed(0),this.elements.levelValueDisplay.textContent=t.toFixed(0);const i={window:e,level:t};this.volumeRenderer?.setWindowLevel(i);const r=t-e/2,s=t+e/2;this.mprViews.forEach(o=>{o.setWindowLevel(r,s)})}async loadSyntheticData(){const e=this.loader.generateSyntheticData();this.initializeWithVolumeData(e)}async loadFromFile(e){try{const t=await this.loader.loadFromFile(e);this.disposeCurrent(),this.initializeWithVolumeData(t)}catch(t){console.error("Failed to load file:",t),alert("加载文件失败，请检查文件格式")}}initializeWithVolumeData(e){this.volumeTexture=new fv(e),this.updateInfoDisplay(e),this.setupWindowControls(e),this.elements&&(this.volumeRenderer=new xv(this.elements.volumeContainer,this.volumeTexture),this.tfEditor=new vv(this.elements.tfContainer,this.volumeTexture.getDefaultTransferFunction(),this.volumeTexture.getHistogram(),this.volumeTexture.getValueRange(),t=>{this.volumeRenderer?.setTransferFunction(t)}),this.setupMPRViews())}setupMPRViews(){if(!this.elements||!this.volumeTexture)return;const e=this.elements.mprContainer.querySelectorAll(".mpr-view"),t=["axial","sagittal","coronal"];e.forEach((i,r)=>{const s=t[r],o=new Sv(i,this.volumeTexture,s,l=>{const h=this.getMaxSliceForPlane(s)-1,d=document.getElementById(`${s}Index`);d&&(d.textContent=`${l+1}/${h+1}`)});this.mprViews.set(s,o);const a=this.getMaxSliceForPlane(s)-1,c=document.getElementById(`${s}Index`);c&&(c.textContent=`${Math.floor(a/2)+1}/${a+1}`)})}getMaxSliceForPlane(e){if(!this.volumeTexture)return 1;const t=this.volumeTexture.getDimensions();switch(e){case"axial":return t.depth;case"sagittal":return t.width;case"coronal":return t.height}}setupWindowControls(e){if(!this.elements)return;const{minValue:t,maxValue:i}=e,r=i-t;this.elements.windowInput.min=(r*.01).toFixed(0),this.elements.windowInput.max=r.toFixed(0),this.elements.levelInput.min=t.toFixed(0),this.elements.levelInput.max=i.toFixed(0),this.elements.windowInput.step=(r*.01).toFixed(0),this.elements.levelInput.step=(r*.01).toFixed(0);const s=r,o=(i+t)/2;this.setWindowLevelUI(s,o)}updateInfoDisplay(e){if(!this.elements)return;const{dimensions:t,spacing:i,minValue:r,maxValue:s}=e,o=e.data instanceof Int16Array?"Int16":e.data instanceof Uint16Array?"Uint16":e.data instanceof Float32Array?"Float32":e.data instanceof Int8Array?"Int8":"Uint8";this.elements.infoDisplay.innerHTML=`
      尺寸: <span>${t.width} × ${t.height} × ${t.depth}</span><br>
      体素间距: <span>${i.x.toFixed(2)} × ${i.y.toFixed(2)} × ${i.z.toFixed(2)}</span><br>
      值范围: <span>${r.toFixed(0)} ~ ${s.toFixed(0)}</span><br>
      数据类型: <span>${o}</span>
    `}disposeCurrent(){this.volumeRenderer?.dispose(),this.tfEditor?.dispose(),this.mprViews.forEach(e=>e.dispose()),this.mprViews.clear(),this.volumeTexture?.dispose(),this.segLabels=[]}dispose(){this.disposeCurrent(),this.container.innerHTML=""}}const Lc=document.getElementById("app");Lc&&new Mv(Lc);
