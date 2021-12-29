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
