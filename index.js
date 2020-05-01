    const Alexa = require('ask-sdk-core');

    const LaunchRequestHandler = {
        canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
        },
        handle(handlerInput) {
            const speakOutput = 'Welcome to demo skill?';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    };
    const HelloWorldIntentHandler = {
        canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'helloworld';
        },
        handle(handlerInput) {
            const speakOutput = 'Hello world! THis is the is the first Alexa lambda function';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    };
 
    const ErrorHandler = {
        canHandle() {
            return true;
        },
        handle(handlerInput, error) {
            console.log(`~~~~ Error handled: ${error.stack}`);
            const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    };


    exports.handler = Alexa.SkillBuilders.custom()
        .addRequestHandlers(
            LaunchRequestHandler,
            HelloWorldIntentHandler,
           ).addErrorHandlers(ErrorHandler,)
        .lambda();