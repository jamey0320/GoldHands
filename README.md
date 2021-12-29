# GoldHands

## 1. Synthesis sketches with TOM
- TOM 모델은 이미지로 부터 스케치를 뽑아내는 모델 입니다.
- 스케치-이미지 데이터 쌍 학습
  - cd sketch_styletransfer
    python train.py --path_a /path/to/RGB-image-folder --path_b /path/to/real-sketches
- (위 학습을 기반으로) 이미지로 부터 스케치 데이터 생성
   - python evaluate.py --path_content /path/to/RGB-image-folder --path_result
/your/customized/path/for/synthesized-sketches --checkpoint /choose/any/checkpoint/you/like

## 2. Train the Sketch-to-image model
- sketch to image model 학습
  - python train.py
  - 혹은, 아래와 같이 단계적 학습 가능
    - python train_step_1_ae.py
    - python train_step_2_gan.py
- config.py 에 있는 매개변수를 바꿔가며 조정할수 있음.
```
DATALOADER_WORKERS
ITERATION_AE
PRETRAINED_AE_PATH
PRETRAINED_AE_ITER
data_root_colorful = 'D:\\Jupyter\\CelebA512\\img' #'/path/to/image/folder'
data_root_sketch_1 = 'D:\\Jupyter\\celebasketch\\skt1' #'/path/to/sketch/folder'
data_root_sketch_2 = 'D:\\Jupyter\\celebasketch\\skt2' #'/path/to/sketch/folder'
data_root_sketch_3 = 'D:\\Jupyter\\celebasketch\\skt3' #'/path/to/sketch/folder'
```

## 3. Inference
- python benchmark_test.py
  내부에 선언된 model check point 와 image 경로 조정 필요
```
ckpt = './train_results/GAN_trial-pr-face-8-20-23-30/models/19.pth'
data_root_colorful = 'D:\\Jupyter\\testDataset\\style2'
data_root_sketch_1 = 'D:\\Jupyter\\testDataset\\sketch6'
data_root_sketch_2 = 'D:\\Jupyter\\testDataset\\sketch6'
data_root_sketch_3 = 'D:\\Jupyter\\testDataset\\sketch6'
```

## 4. Others
- models.py
  - 모든 모델 구조 선언
  - style encoder, content encoder, decoder, generator, and discriminator.
- datasets.py
  - data pre-processing, data loading, style image augmenting logic, sketch augmenting logic
- train_step_1_ae.py
  - autoencoder 학습
  - including the objective functions, optimization methods, training procedures.
- train_step_2_gan.py
  - GAN 학습
  - including the objective functions, optimization methods, training procedures.
- train.py
  - 메인 코드 (모델을 실행하는 코드)
  - Checkpoint 자동으로 저장됨.
- config.py
  - hyper-parameters 셋팅 & 정의
  - such as learning rate, batch-size, and image folder paths.
- benchmark_test.py
  - FID 측정, inference 결과물 확인
- lpips
  - LPIPS score 계산
- sketch_styletransfer
  - sketch synthesis model 학습 코드

## 5. requirements
certifi==2021.5.30
cycler==0.10.0
entrypoints==0.3
flask==1.0.2
imageio==2.9.0
jupyter==1.0.0
kiwisolver==1.3.1
matplotlib==3.4.2
mistune==0.8.4
mkl-fft==1.3.0
mkl-service==2.4.0
networkx==2.6.2
olefile==0.46
opencv-python==4.5.3.56
pandas==1.3.1
python==3.6.5
pytz==2021.1
PyWavelets==1.1.1
pywin32==228
pywinpty==0.5.7
pyzmq==20.0.0
QtPy==1.9.0
scikit-image==0.18.2
scipy==1.7.1
sip==4.19.13
terminado==0.9.4
tifffile==2021.8.8
torch==1.7.0
torchaudio==0.7.0
torchvision==0.8.0
tqdm==4.62.0
webencodings==0.5.1
widgetsnbextension==3.5.1
wincertstore==0.2
