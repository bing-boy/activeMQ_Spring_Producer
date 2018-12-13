package com.mq.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mq.producer.QueueSender;
import com.mq.producer.TopicSender;

@Controller
@RequestMapping("/activemq")
public class ActinvemqController {

	@Resource
	QueueSender queueSender;
	
	@Resource
	TopicSender topicSender;
	
	
	@RequestMapping("/queueSender")
	@ResponseBody
	public String queueSender(@RequestParam("message")String message) {
		String opt = "";
		try {
			queueSender.send("test.queue", message);
			opt = "success";
		} catch (Exception e) {
			opt = e.getCause().toString();
		}
		return opt;
	}
	
	@RequestMapping("/topicSender")
	@ResponseBody
	public String topicSender(@RequestParam("message")String message) {
		String opt = "";
		try {
			topicSender.send("test.topic", message);
			opt = "success";
		} catch (Exception e) {
			opt = e.getCause().toString();
		}
		return opt;
	}
}
