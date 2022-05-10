<details>
<summary>Table of content</summary>

- [Overview](#overview)
  - [Project Scope](#project-scope)
  - [Approvals](#approvals)
</details>

# Overview

## Project Scope

The goal of this project is to create a device capable of listening to conversations around itself and recognise if the language(s) spoken during the conversation are English or French.

## Approvals

The device must use [AI](#ai) in order to recognize the language spoken around it and must also be capable of giving a feedback in some form such as LEDs or a beeper.

## Target Audience

This project has been proposed and is intended for the use of ALGOSUP. (so that they can spy on students during project time)

## Similar Already Existing Projects

Similar project have already been done by other people, even if the objectives aren't exactly the same as ours, we can use the knowledge left by others regarding what they have done or faced in the past.(difficulties encountered/[AI training](#ai-training)/best data to use/...)

The following link lead to an open source project that was done in order to recognize German from English in voice recordings, the creator has also left indications to reproduce or modify the results of his work.

https://github.com/fraunhofer-iais/language-recognition

## Risks And Assumptions 

 - The device may have difficulties recognizing the language when multiple people are speaking at the same time. 

 - The device may have difficulties if two or more people are talking in different languages at the same time. 

 - The device may have difficulties with the different accents spoken by people. 

## Requirements

Using [AI](#ai) the device must be able to : 

 - Hear a voice and understand the text spoken. 

 - Recognize the spoken language (English/French). 

 - Display when the language spoken isn’t English (visual or sound effect). 

## Non Fonctionnal Requirements

 - Recognize different levels of English (bad English, good English with bad pronunciation, …) 

 - Display when the language spoken isn’t recognized (nor English or French) 
 
 - Recognize different accent types in languages

 ## Data Gathering

To create the [AI](#ai), we necessitate [datasets](#datasets) of pre-recorded conversations.
Gathering the viable datasets will be one of the largest bottlenecks of this project.
These [datasets](#datasets) must be present in both English and French.
 
The two ways this can be accomplished is either to gather the data ourselves or to find pre-existing datasets (from example, from websites such as Google DataSetSearch)

The main advantage of creating our own dataset is the fact that the [dataset](#datasets) will be specifically created to understand the student’s accents, therefore rising accuracy.
However, this would also limit the amount of data that we could use.
To do so, we would have to register the students within the school speaking either only French or only English. The English classes would be a prime opportunity to do this.
The quality of these recordings must be at least the same as the audio recorded by the final product. Using this method, we would need to gather a maximum amount of data.

The alternative would be the exact opposite as we could access large quantities of data but we would have no guarantee that the [dataset](#datasets) will be perfectly relevant for our needs.

A hybrid solution is also an option.

## Security

The best way to ensure privacy is to only process and not save the audio the device(s) will listen to.
This way, the information can not be accessed from anywhere and is erased the moment the AI has made its choice.

Furthermore, by making the project open source, the future users could ensure that no part of the project allows the data to be used above required.

## Configuration

### Materials

For this project we are planning to use an ARDUINO SENSE as the embeded system because it embark a microphone

### Cost

The cost of the ARDUINO is around 30 to 35€ depending of the selling website (32.70€ on official WebSite)

(other cost(-s) ?)

## Terminology

### AI

AI stands for Artificial Intelligence [...]

### AI Training

The term "AI Training" refert to the fact of giving data to an AI model to train it to do what we want it to do (in our case recognizing English/French)

### Datasets

Datasets are big folders which concentrate the same type of data (for instance recordings of English voices)