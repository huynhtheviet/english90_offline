const E90_VI = (() => {
  const topics = [
    'Giới thiệu bản thân',
    'Giải thích công việc bạn làm',
    'Mô tả dự án hiện tại của bạn',
    'Giải thích một vấn đề và giải pháp',
    'Đưa ra ý kiến của bạn',
    'Yêu cầu làm rõ',
    'Cập nhật tình hình dự án',
    'Nói về điểm mạnh của bạn',
    'Nói về một điểm yếu',
    'Nói về một thành tựu',
    'Nói về một sai lầm',
    'Bày tỏ bất đồng một cách lịch sự',
    'Đặt câu hỏi tốt hơn',
    'Điều hành một cuộc họp ngắn',
    'Xử lý cuộc gọi với khách hàng',
    'Đề xuất một giải pháp',
    'Bảo vệ quan điểm của bạn',
    'Trả lời các câu hỏi bất ngờ',
    'Cập nhật tình hình trong 30 giây',
    'Xử lý các câu hỏi khó',
    'Kể về hành trình nghề nghiệp của bạn',
    'Giải thích sản phẩm của bạn một cách đơn giản',
    'Mô tả đội nhóm của bạn',
    'Nói về khách hàng của bạn',
    'Giải thích một khái niệm kỹ thuật',
    'Thảo luận về các ưu tiên',
    'Nói về thời hạn',
    'Đưa ra một đề xuất',
    'Tóm tắt một cuộc thảo luận',
    'Mở đầu và kết thúc một cuộc họp',
    'Lập chương trình họp',
    'Giải thích các yêu cầu',
    'Làm rõ phạm vi',
    'Thảo luận về những đánh đổi',
    'Ước tính khối lượng công việc',
    'Nói về các rủi ro',
    'Báo cáo một trở ngại lên cấp trên',
    'Đưa ra phản hồi mang tính xây dựng',
    'Tiếp nhận phản hồi',
    'Thương lượng thời hạn',
    'Thương lượng phạm vi',
    'Giải thích một sự chậm trễ',
    'Đưa ra quyết định',
    'So sánh hai phương án',
    'Trình bày dữ liệu một cách đơn giản',
    'Giải thích phản hồi của người dùng',
    'Thảo luận về chiến lược sản phẩm',
    'Thảo luận về AI trong công việc',
    'Thảo luận về tự động hóa',
    'Giải thích một quy trình làm việc',
    'Mô tả kiến trúc hệ thống',
    'Giải thích API một cách đơn giản',
    'Giải thích cơ sở dữ liệu một cách đơn giản',
    'Giải thích các dịch vụ đám mây',
    'Nói về bảo mật',
    'Nói về chất lượng',
    'Nói về kiểm thử',
    'Nói về các lỗi phần mềm',
    'Nói về một bản phát hành',
    'Hãy giới thiệu về bản thân bạn',
    'Tại sao bạn muốn vị trí này?',
    'Tại sao chúng tôi nên tuyển bạn?',
    'Điểm mạnh lớn nhất',
    'Điểm yếu lớn nhất',
    'Một dự án khó khăn',
    'Xung đột trong công việc',
    'Ví dụ về khả năng lãnh đạo',
    'Thất bại và bài học',
    'Mục tiêu nghề nghiệp',
    'Mức lương mong muốn',
    'Làm việc dưới áp lực',
    'Làm việc nhóm',
    'Giải quyết vấn đề',
    'Các câu hỏi dành cho người phỏng vấn',
    'Cuộc gọi tìm hiểu nhu cầu khách hàng',
    'Trình diễn sản phẩm',
    'Thảo luận kỹ thuật',
    'Lập kế hoạch sprint',
    'Họp đứng hằng ngày',
    'Họp nhìn lại',
    'Thảo luận lộ trình',
    'Thuyết trình với nhà đầu tư/về sản phẩm',
    'Khiếu nại của khách hàng',
    'Bên liên quan khó tính',
    'Hợp tác liên nhóm',
    'Làm việc từ xa',
    'Tranh luận chiến lược',
    'Bài thuyết trình 10 phút',
    'Phỏng vấn thử',
    'Cuộc họp cuối cùng bằng tiếng Anh trong 30 phút'
  ];

  const phases = {
    'Foundation Fluency': 'Nền tảng trôi chảy',
    'Professional Fluency': 'Giao tiếp chuyên nghiệp trôi chảy',
    'Interview Fluency': 'Phỏng vấn trôi chảy',
    'Immersion Fluency': 'Giao tiếp nhập vai trôi chảy'
  };

  const frameworkSteps = {
    'Point → Reason → Example → Point again': 'Ý chính → Lý do → Ví dụ → Nhắc lại ý chính',
    'Situation → Task → Action → Result': 'Tình huống → Nhiệm vụ → Hành động → Kết quả',
    'Context → Listen → Explain → Action → Recap': 'Bối cảnh → Lắng nghe → Giải thích → Hành động → Tóm tắt',
    'What it is → Why it matters → How it works → Example': 'Đó là gì → Tại sao quan trọng → Hoạt động thế nào → Ví dụ',
    'Done → Now → Blocker → Next': 'Đã xong → Hiện tại → Trở ngại → Tiếp theo',
    'Goal → Options → Trade-offs → Choice → Next step': 'Mục tiêu → Các phương án → Đánh đổi → Lựa chọn → Bước tiếp theo'
  };

  const phrases = {
    'The main reason is…': 'Lý do chính là…',
    'For example…': 'Ví dụ…',
    'If I understand correctly…': 'Nếu tôi hiểu đúng…',
    'Could you clarify…?': 'Bạn có thể làm rõ… được không?',
    'One option would be to…': 'Một phương án là…',
    'I’d recommend…': 'Tôi đề xuất…',
    'The main concern is…': 'Mối lo ngại chính là…',
    'What I mean is…': 'Ý tôi là…',
    'Let me put it another way…': 'Để tôi diễn đạt theo cách khác…',
    'Based on what we know right now…': 'Dựa trên những gì chúng ta biết hiện giờ…',
    'The next step is…': 'Bước tiếp theo là…',
    'To summarize…': 'Tóm lại…',
    'That’s a fair question.': 'Đó là một câu hỏi hợp lý.',
    'I see your point, but…': 'Tôi hiểu ý bạn, nhưng…',
    'I agree to some extent, however…': 'Tôi đồng ý ở một mức độ nào đó, tuy nhiên…',
    'What problem are we trying to solve?': 'Chúng ta đang cố gắng giải quyết vấn đề gì?',
    'How will we know if this is successful?': 'Làm sao chúng ta biết việc này thành công?',
    'We’ve run into an issue with…': 'Chúng ta đã gặp một vấn đề với…',
    'We’re still on track to…': 'Chúng ta vẫn đang đúng tiến độ để…',
    'I don’t have the exact answer yet, but…': 'Tôi chưa có câu trả lời chính xác, nhưng…',
    'Let me give you a quick update.': 'Để tôi cập nhật nhanh cho bạn.',
    'One thing I learned was…': 'Một điều tôi đã học được là…',
    'Looking back, I would…': 'Nhìn lại, tôi sẽ…',
    'What I’m trying to achieve is…': 'Điều tôi đang cố gắng đạt được là…',
    'The biggest challenge is…': 'Thách thức lớn nhất là…',
    'We have a couple of options.': 'Chúng ta có một vài phương án.',
    'The reason I prefer this option is…': 'Lý do tôi ưu tiên phương án này là…',
    'Before we decide…': 'Trước khi chúng ta quyết định…',
    'Let’s move on to…': 'Hãy chuyển sang…',
    'I’d like to start by…': 'Tôi muốn bắt đầu bằng việc…',
    'The main point is…': 'Ý chính là…',
    'From my perspective…': 'Theo quan điểm của tôi…'
  };

  const phraseExamples = {
    'The main reason is…': [
      {en:'The main reason is that the client changed the requirements after development started.',vi:'Lý do chính là khách hàng đã thay đổi yêu cầu sau khi quá trình phát triển bắt đầu.'},
      {en:'The main reason is that we need more time to test the payment flow.',vi:'Lý do chính là chúng ta cần thêm thời gian để kiểm thử luồng thanh toán.'},
      {en:'The main reason is that this option will reduce support costs.',vi:'Lý do chính là phương án này sẽ giảm chi phí hỗ trợ.'}
    ],
    'For example…': [
      {en:'For example, we automated the weekly report and saved three hours of manual work.',vi:'Ví dụ, chúng tôi đã tự động hóa báo cáo hằng tuần và tiết kiệm ba giờ làm thủ công.'},
      {en:'For example, a new user can complete the sign-up process in less than two minutes.',vi:'Ví dụ, người dùng mới có thể hoàn tất đăng ký trong chưa đầy hai phút.'},
      {en:'For example, the sales team used this dashboard during yesterday’s client meeting.',vi:'Ví dụ, đội kinh doanh đã dùng bảng điều khiển này trong cuộc họp khách hàng hôm qua.'}
    ],
    'If I understand correctly…': [
      {en:'If I understand correctly, you need the first version by Friday.',vi:'Nếu tôi hiểu đúng, bạn cần phiên bản đầu tiên trước thứ Sáu.'},
      {en:'If I understand correctly, the budget includes design but not user testing.',vi:'Nếu tôi hiểu đúng, ngân sách bao gồm thiết kế nhưng không bao gồm kiểm thử người dùng.'},
      {en:'If I understand correctly, we should fix the login issue before adding new features.',vi:'Nếu tôi hiểu đúng, chúng ta nên sửa lỗi đăng nhập trước khi thêm tính năng mới.'}
    ],
    'Could you clarify…?': [
      {en:'Could you clarify which customer group this feature is for?',vi:'Bạn có thể làm rõ tính năng này dành cho nhóm khách hàng nào không?'},
      {en:'Could you clarify what you mean by “high priority”?',vi:'Bạn có thể làm rõ ý của bạn khi nói “ưu tiên cao” không?'},
      {en:'Could you clarify whether the deadline is this Friday or next Friday?',vi:'Bạn có thể làm rõ thời hạn là thứ Sáu tuần này hay tuần sau không?'},
    ],
    'One option would be to…': [
      {en:'One option would be to release the feature to a small group of users first.',vi:'Một phương án là phát hành tính năng cho một nhóm nhỏ người dùng trước.'},
      {en:'One option would be to move the meeting to tomorrow morning.',vi:'Một phương án là chuyển cuộc họp sang sáng mai.'},
      {en:'One option would be to simplify the first version and add advanced features later.',vi:'Một phương án là đơn giản hóa phiên bản đầu tiên và bổ sung tính năng nâng cao sau.'}
    ],
    'I’d recommend…': [
      {en:'I’d recommend testing the new checkout flow with five customers before launch.',vi:'Tôi đề xuất kiểm thử luồng thanh toán mới với năm khách hàng trước khi ra mắt.'},
      {en:'I’d recommend keeping the presentation under ten minutes.',vi:'Tôi đề xuất giữ bài thuyết trình dưới mười phút.'},
      {en:'I’d recommend documenting this decision so the whole team can refer to it.',vi:'Tôi đề xuất ghi lại quyết định này để cả nhóm có thể tham khảo.'}
    ],
    'The main concern is…': [
      {en:'The main concern is that we have not tested the migration with real customer data.',vi:'Mối lo ngại chính là chúng ta chưa kiểm thử việc chuyển đổi bằng dữ liệu khách hàng thực tế.'},
      {en:'The main concern is the extra cost of maintaining two systems.',vi:'Mối lo ngại chính là chi phí bổ sung để duy trì hai hệ thống.'},
      {en:'The main concern is that the team may not have enough time before the deadline.',vi:'Mối lo ngại chính là đội có thể không đủ thời gian trước hạn chót.'}
    ],
    'What I mean is…': [
      {en:'What I mean is that we should solve the customer’s problem, not just add another button.',vi:'Ý tôi là chúng ta nên giải quyết vấn đề của khách hàng, không chỉ thêm một nút nữa.'},
      {en:'What I mean is that the deadline is flexible, but the quality standard is not.',vi:'Ý tôi là thời hạn có thể linh hoạt, nhưng tiêu chuẩn chất lượng thì không.'},
      {en:'What I mean is that everyone should understand the goal before we divide the tasks.',vi:'Ý tôi là mọi người nên hiểu mục tiêu trước khi chúng ta chia công việc.'}
    ],
    'Let me put it another way…': [
      {en:'Let me put it another way: we are spending more time fixing the tool than using it.',vi:'Để tôi diễn đạt theo cách khác: chúng ta đang dành nhiều thời gian sửa công cụ hơn là sử dụng nó.'},
      {en:'Let me put it another way: the feature works, but it is still too difficult for new users.',vi:'Để tôi diễn đạt theo cách khác: tính năng hoạt động, nhưng vẫn quá khó đối với người dùng mới.'},
      {en:'Let me put it another way: we need a smaller plan that we can finish this month.',vi:'Để tôi diễn đạt theo cách khác: chúng ta cần một kế hoạch nhỏ hơn mà có thể hoàn thành trong tháng này.'}
    ],
    'Based on what we know right now…': [
      {en:'Based on what we know right now, the release can still happen on Monday.',vi:'Dựa trên những gì chúng ta biết hiện giờ, bản phát hành vẫn có thể diễn ra vào thứ Hai.'},
      {en:'Based on what we know right now, the database is not the cause of the slowdown.',vi:'Dựa trên những gì chúng ta biết hiện giờ, cơ sở dữ liệu không phải là nguyên nhân gây chậm.'},
      {en:'Based on what we know right now, option B has the lowest implementation risk.',vi:'Dựa trên những gì chúng ta biết hiện giờ, phương án B có rủi ro triển khai thấp nhất.'}
    ],
    'The next step is…': [
      {en:'The next step is to send the prototype to the client for feedback.',vi:'Bước tiếp theo là gửi bản mẫu cho khách hàng để lấy phản hồi.'},
      {en:'The next step is to assign an owner and agree on a deadline.',vi:'Bước tiếp theo là chỉ định người phụ trách và thống nhất thời hạn.'},
      {en:'The next step is to reproduce the bug in the test environment.',vi:'Bước tiếp theo là tái hiện lỗi trong môi trường kiểm thử.'}
    ],
    'To summarize…': [
      {en:'To summarize, we will fix the critical bugs today and release the update tomorrow.',vi:'Tóm lại, hôm nay chúng ta sẽ sửa các lỗi nghiêm trọng và phát hành bản cập nhật vào ngày mai.'},
      {en:'To summarize, the client approved the design but requested a simpler navigation menu.',vi:'Tóm lại, khách hàng đã duyệt thiết kế nhưng yêu cầu menu điều hướng đơn giản hơn.'},
      {en:'To summarize, Lan will prepare the data and Minh will present the results on Friday.',vi:'Tóm lại, Lan sẽ chuẩn bị dữ liệu và Minh sẽ trình bày kết quả vào thứ Sáu.'}
    ],
    'That’s a fair question.': [
      {en:'That’s a fair question. We chose this approach because it is easier to maintain.',vi:'Đó là một câu hỏi hợp lý. Chúng tôi chọn cách này vì nó dễ bảo trì hơn.'},
      {en:'That’s a fair question. I’ll check the numbers and give you an answer this afternoon.',vi:'Đó là một câu hỏi hợp lý. Tôi sẽ kiểm tra số liệu và trả lời bạn vào chiều nay.'},
      {en:'That’s a fair question. The team discussed the same risk during planning.',vi:'Đó là một câu hỏi hợp lý. Đội cũng đã thảo luận rủi ro này trong lúc lập kế hoạch.'}
    ],
    'I see your point, but…': [
      {en:'I see your point, but delaying the release may create a bigger problem for customers.',vi:'Tôi hiểu ý bạn, nhưng trì hoãn phát hành có thể tạo ra vấn đề lớn hơn cho khách hàng.'},
      {en:'I see your point, but we do not have enough data to make that decision yet.',vi:'Tôi hiểu ý bạn, nhưng chúng ta chưa có đủ dữ liệu để đưa ra quyết định đó.'},
      {en:'I see your point, but adding more features will increase the testing time.',vi:'Tôi hiểu ý bạn, nhưng thêm nhiều tính năng sẽ làm tăng thời gian kiểm thử.'}
    ],
    'I agree to some extent, however…': [
      {en:'I agree to some extent; however, price is not the only factor our customers consider.',vi:'Tôi đồng ý ở một mức độ nào đó; tuy nhiên, giá không phải là yếu tố duy nhất khách hàng cân nhắc.'},
      {en:'I agree to some extent; however, we still need a clear owner for this task.',vi:'Tôi đồng ý ở một mức độ nào đó; tuy nhiên, chúng ta vẫn cần một người phụ trách rõ ràng cho công việc này.'},
      {en:'I agree to some extent; however, the short-term solution may be expensive to maintain.',vi:'Tôi đồng ý ở một mức độ nào đó; tuy nhiên, giải pháp ngắn hạn có thể tốn kém để duy trì.'}
    ],
    'What problem are we trying to solve?': [
      {en:'Before discussing features, what problem are we trying to solve for new customers?',vi:'Trước khi thảo luận tính năng, chúng ta đang cố gắng giải quyết vấn đề gì cho khách hàng mới?'},
      {en:'What problem are we trying to solve: slow delivery or unclear requirements?',vi:'Chúng ta đang cố gắng giải quyết vấn đề gì: giao hàng chậm hay yêu cầu không rõ ràng?'},
      {en:'What problem are we trying to solve with this new dashboard?',vi:'Chúng ta đang cố gắng giải quyết vấn đề gì bằng bảng điều khiển mới này?'},
    ],
    'How will we know if this is successful?': [
      {en:'How will we know if this is successful? We could track the number of completed purchases.',vi:'Làm sao chúng ta biết việc này thành công? Chúng ta có thể theo dõi số giao dịch mua hoàn tất.'},
      {en:'How will we know if this is successful after the first month?',vi:'Làm sao chúng ta biết việc này thành công sau tháng đầu tiên?'},
      {en:'How will we know if this is successful for both customers and the support team?',vi:'Làm sao chúng ta biết việc này thành công cho cả khách hàng và đội hỗ trợ?'},
    ],
    'We’ve run into an issue with…': [
      {en:'We’ve run into an issue with the payment provider, so some transactions are delayed.',vi:'Chúng ta đã gặp một vấn đề với nhà cung cấp thanh toán, vì vậy một số giao dịch bị chậm.'},
      {en:'We’ve run into an issue with the latest mobile app build.',vi:'Chúng ta đã gặp một vấn đề với bản dựng ứng dụng di động mới nhất.'},
      {en:'We’ve run into an issue with missing customer records in the imported file.',vi:'Chúng ta đã gặp một vấn đề với các hồ sơ khách hàng bị thiếu trong tệp đã nhập.'}
    ],
    'We’re still on track to…': [
      {en:'We’re still on track to finish development by Thursday.',vi:'Chúng ta vẫn đang đúng tiến độ để hoàn thành phát triển trước thứ Năm.'},
      {en:'We’re still on track to launch the pilot program next month.',vi:'Chúng ta vẫn đang đúng tiến độ để khởi động chương trình thử nghiệm vào tháng sau.'},
      {en:'We’re still on track to deliver the report before the client meeting.',vi:'Chúng ta vẫn đang đúng tiến độ để bàn giao báo cáo trước cuộc họp khách hàng.'}
    ],
    'I don’t have the exact answer yet, but…': [
      {en:'I don’t have the exact answer yet, but I can confirm it with the finance team today.',vi:'Tôi chưa có câu trả lời chính xác, nhưng hôm nay tôi có thể xác nhận với đội tài chính.'},
      {en:'I don’t have the exact answer yet, but the first test results look positive.',vi:'Tôi chưa có câu trả lời chính xác, nhưng kết quả kiểm thử đầu tiên có vẻ tích cực.'},
      {en:'I don’t have the exact answer yet, but I’ll investigate and update you before noon.',vi:'Tôi chưa có câu trả lời chính xác, nhưng tôi sẽ kiểm tra và cập nhật cho bạn trước buổi trưa.'}
    ],
    'Let me give you a quick update.': [
      {en:'Let me give you a quick update. The design is finished, and development starts today.',vi:'Để tôi cập nhật nhanh cho bạn. Thiết kế đã hoàn tất và việc phát triển bắt đầu hôm nay.'},
      {en:'Let me give you a quick update. We fixed the login bug but are still testing the payment issue.',vi:'Để tôi cập nhật nhanh cho bạn. Chúng tôi đã sửa lỗi đăng nhập nhưng vẫn đang kiểm thử vấn đề thanh toán.'},
      {en:'Let me give you a quick update. The client approved two of the three proposed changes.',vi:'Để tôi cập nhật nhanh cho bạn. Khách hàng đã duyệt hai trong ba thay đổi được đề xuất.'}
    ],
    'One thing I learned was…': [
      {en:'One thing I learned was to confirm the requirements before estimating the work.',vi:'Một điều tôi đã học được là xác nhận yêu cầu trước khi ước tính công việc.'},
      {en:'One thing I learned was that short user interviews can reveal important problems.',vi:'Một điều tôi đã học được là các cuộc phỏng vấn người dùng ngắn có thể làm lộ ra những vấn đề quan trọng.'},
      {en:'One thing I learned was to communicate risks as early as possible.',vi:'Một điều tôi đã học được là thông báo rủi ro càng sớm càng tốt.'}
    ],
    'Looking back, I would…': [
      {en:'Looking back, I would involve the support team earlier in the project.',vi:'Nhìn lại, tôi sẽ cho đội hỗ trợ tham gia dự án sớm hơn.'},
      {en:'Looking back, I would spend more time testing the data migration.',vi:'Nhìn lại, tôi sẽ dành nhiều thời gian hơn để kiểm thử việc chuyển đổi dữ liệu.'},
      {en:'Looking back, I would ask for feedback after the first prototype.',vi:'Nhìn lại, tôi sẽ xin phản hồi sau bản mẫu đầu tiên.'}
    ],
    'What I’m trying to achieve is…': [
      {en:'What I’m trying to achieve is a faster onboarding process for new employees.',vi:'Điều tôi đang cố gắng đạt được là quy trình hội nhập nhanh hơn cho nhân viên mới.'},
      {en:'What I’m trying to achieve is a clear plan that everyone can follow.',vi:'Điều tôi đang cố gắng đạt được là một kế hoạch rõ ràng mà mọi người đều có thể làm theo.'},
      {en:'What I’m trying to achieve is fewer support requests after each release.',vi:'Điều tôi đang cố gắng đạt được là ít yêu cầu hỗ trợ hơn sau mỗi lần phát hành.'}
    ],
    'The biggest challenge is…': [
      {en:'The biggest challenge is keeping the old system running during the migration.',vi:'Thách thức lớn nhất là duy trì hệ thống cũ hoạt động trong quá trình chuyển đổi.'},
      {en:'The biggest challenge is getting feedback from busy customers.',vi:'Thách thức lớn nhất là nhận được phản hồi từ những khách hàng bận rộn.'},
      {en:'The biggest challenge is balancing speed, cost, and product quality.',vi:'Thách thức lớn nhất là cân bằng tốc độ, chi phí và chất lượng sản phẩm.'}
    ],
    'We have a couple of options.': [
      {en:'We have a couple of options. We can fix the current tool or replace it next quarter.',vi:'Chúng ta có một vài phương án. Chúng ta có thể sửa công cụ hiện tại hoặc thay thế nó vào quý sau.'},
      {en:'We have a couple of options: hire a specialist or train someone on the team.',vi:'Chúng ta có một vài phương án: tuyển chuyên gia hoặc đào tạo một người trong đội.'},
      {en:'We have a couple of options. Let’s compare their cost and implementation time.',vi:'Chúng ta có một vài phương án. Hãy so sánh chi phí và thời gian triển khai của chúng.'}
    ],
    'The reason I prefer this option is…': [
      {en:'The reason I prefer this option is that we can test it without affecting all customers.',vi:'Lý do tôi ưu tiên phương án này là chúng ta có thể kiểm thử mà không ảnh hưởng đến tất cả khách hàng.'},
      {en:'The reason I prefer this option is that it uses tools the team already knows.',vi:'Lý do tôi ưu tiên phương án này là nó sử dụng các công cụ mà đội đã biết.'},
      {en:'The reason I prefer this option is that it gives us useful results within two weeks.',vi:'Lý do tôi ưu tiên phương án này là nó cho chúng ta kết quả hữu ích trong vòng hai tuần.'}
    ],
    'Before we decide…': [
      {en:'Before we decide, let’s confirm the budget with the finance team.',vi:'Trước khi chúng ta quyết định, hãy xác nhận ngân sách với đội tài chính.'},
      {en:'Before we decide, we should ask two customers to test both designs.',vi:'Trước khi chúng ta quyết định, chúng ta nên nhờ hai khách hàng kiểm thử cả hai thiết kế.'},
      {en:'Before we decide, can we review the risks of delaying the launch?',vi:'Trước khi chúng ta quyết định, chúng ta có thể xem lại rủi ro của việc trì hoãn ra mắt không?'},
    ],
    'Let’s move on to…': [
      {en:'Let’s move on to the second item on today’s agenda.',vi:'Hãy chuyển sang mục thứ hai trong chương trình hôm nay.'},
      {en:'Let’s move on to the timeline and identify the key deadlines.',vi:'Hãy chuyển sang tiến độ và xác định các thời hạn quan trọng.'},
      {en:'Let’s move on to the customer feedback we received last week.',vi:'Hãy chuyển sang phản hồi của khách hàng mà chúng ta nhận được tuần trước.'}
    ],
    'I’d like to start by…': [
      {en:'I’d like to start by explaining the customer problem we discovered.',vi:'Tôi muốn bắt đầu bằng việc giải thích vấn đề của khách hàng mà chúng tôi đã phát hiện.'},
      {en:'I’d like to start by thanking everyone for finishing the release on time.',vi:'Tôi muốn bắt đầu bằng việc cảm ơn mọi người đã hoàn thành bản phát hành đúng hạn.'},
      {en:'I’d like to start by reviewing the goals of today’s meeting.',vi:'Tôi muốn bắt đầu bằng việc xem lại các mục tiêu của cuộc họp hôm nay.'}
    ],
    'The main point is…': [
      {en:'The main point is that customers need a simpler way to find their invoices.',vi:'Ý chính là khách hàng cần một cách đơn giản hơn để tìm hóa đơn của họ.'},
      {en:'The main point is that we can reduce costs without reducing service quality.',vi:'Ý chính là chúng ta có thể giảm chi phí mà không làm giảm chất lượng dịch vụ.'},
      {en:'The main point is that the team needs one clear priority for this week.',vi:'Ý chính là đội cần một ưu tiên rõ ràng cho tuần này.'}
    ],
    'From my perspective…': [
      {en:'From my perspective, the smaller release is safer and easier to measure.',vi:'Theo quan điểm của tôi, bản phát hành nhỏ hơn an toàn hơn và dễ đo lường hơn.'},
      {en:'From my perspective, we should talk to customers before changing the pricing model.',vi:'Theo quan điểm của tôi, chúng ta nên trao đổi với khách hàng trước khi thay đổi mô hình giá.'},
      {en:'From my perspective, clear ownership is more important than adding another process.',vi:'Theo quan điểm của tôi, trách nhiệm rõ ràng quan trọng hơn việc thêm một quy trình nữa.'}
    ]
  };

  const quiz = {
    'What should you focus on first when speaking?': 'Khi nói, trước tiên bạn nên tập trung vào điều gì?',
    'If you forget a word, what should you do?': 'Nếu quên một từ, bạn nên làm gì?',
    'What is the best way to improve fluency?': 'Cách tốt nhất để cải thiện độ trôi chảy là gì?',
    'How long should today’s main speaking answer be?': 'Phần trả lời nói chính hôm nay nên dài bao lâu?',
    'What should you do after speaking?': 'Bạn nên làm gì sau khi nói?',
    'Perfect grammar': 'Ngữ pháp hoàn hảo',
    'A clear main idea': 'Một ý chính rõ ràng',
    'Advanced vocabulary': 'Từ vựng nâng cao',
    'Speaking as fast as possible': 'Nói nhanh nhất có thể',
    'Stop': 'Dừng lại',
    'Switch to Vietnamese': 'Chuyển sang tiếng Việt',
    'Explain it another way': 'Diễn đạt theo cách khác',
    'Restart': 'Bắt đầu lại',
    'Speak regularly': 'Luyện nói thường xuyên',
    'Memorize dictionaries': 'Học thuộc từ điển',
    'Avoid mistakes': 'Tránh mắc lỗi',
    'Only read': 'Chỉ đọc',
    '10 seconds': '10 giây',
    '30 seconds': '30 giây',
    '2–3 minutes': '2–3 phút',
    '20 minutes': '20 phút',
    'Ignore it': 'Bỏ qua',
    'Review 2–3 important mistakes': 'Xem lại 2–3 lỗi quan trọng',
    'Correct every tiny mistake': 'Sửa mọi lỗi nhỏ',
    'Start over immediately': 'Bắt đầu lại ngay lập tức'
  };

  const lowerFirst = text => text.charAt(0).toLocaleLowerCase('vi') + text.slice(1);
  const pair = (en, vi) => ({en, vi});
  const topic = lesson => lesson.title.replace(/^(Interview|Immersion): /, '');
  const topicVi = lesson => topics[lesson.day - 1];

  function objective(lesson) {
    const viTopic = topicVi(lesson);
    if (lesson.day < 60) {
      return [pair(lesson.objective, `Nói rõ ràng về “${viTopic}” trong 2–3 phút bằng một cấu trúc đơn giản và từ vựng thực tế trong công việc.`)];
    }
    if (lesson.day < 75) {
      return [pair(lesson.objective, `Trả lời rõ ràng chủ đề phỏng vấn “${viTopic}” trong 2–3 phút mà không học thuộc lòng kịch bản.`)];
    }
    return [pair(lesson.objective, `Xử lý một tình huống “${viTopic}” thực tế bằng tiếng Anh với rất ít thời gian chuẩn bị.`)];
  }

  function listening(lesson) {
    const enTopic = topic(lesson).toLowerCase();
    const viTopic = lowerFirst(topicVi(lesson));
    return [
      pair(`Here is a short work situation about ${enTopic}.`, `Đây là một tình huống công việc ngắn về ${viTopic}.`),
      pair('The speaker starts by giving context, then explains the main point, and finally suggests a next step.', 'Người nói bắt đầu bằng việc đưa ra bối cảnh, sau đó giải thích ý chính và cuối cùng đề xuất bước tiếp theo.'),
      pair('The important thing is not to understand every word.', 'Điều quan trọng không phải là hiểu từng từ.'),
      pair('Listen for the problem, the reason, and the action.', 'Hãy chú ý lắng nghe vấn đề, lý do và hành động.'),
      pair('After listening, try to summarize the message in your own words.', 'Sau khi nghe, hãy thử tóm tắt thông điệp bằng lời của bạn.')
    ];
  }

  function shadowing(lesson) {
    const enTopic = topic(lesson).toLowerCase();
    const viTopic = lowerFirst(topicVi(lesson));
    return [
      pair(`Today I want to talk about ${enTopic}.`, `Hôm nay tôi muốn nói về ${viTopic}.`),
      pair('I’ll keep it simple and focus on the main idea.', 'Tôi sẽ trình bày đơn giản và tập trung vào ý chính.'),
      pair('First, I would explain the context so the listener understands why this matters.', 'Trước tiên, tôi sẽ giải thích bối cảnh để người nghe hiểu tại sao điều này quan trọng.'),
      pair('Then I would describe the key point, give one practical example, and explain the result or next step.', 'Sau đó, tôi sẽ trình bày điểm chính, đưa ra một ví dụ thực tế và giải thích kết quả hoặc bước tiếp theo.'),
      pair('For me, clear communication is more important than using difficult words.', 'Đối với tôi, giao tiếp rõ ràng quan trọng hơn việc sử dụng những từ khó.'),
      pair('If I’m not sure about something, I can say, “I don’t have the exact answer yet, but here’s what I know.”', 'Nếu chưa chắc về điều gì đó, tôi có thể nói: “Tôi chưa có câu trả lời chính xác, nhưng đây là những gì tôi biết.”'),
      pair('That helps me keep the conversation moving.', 'Điều đó giúp tôi duy trì cuộc trò chuyện.'),
      pair('At the end, I would summarize the main point and make the next action clear.', 'Cuối cùng, tôi sẽ tóm tắt ý chính và nói rõ hành động tiếp theo.')
    ];
  }

  function speaking(lesson) {
    const enTopic = topic(lesson);
    const viTopic = topicVi(lesson);
    if (lesson.day < 60) {
      return [
        pair(`Speak for 2–3 minutes about: “${enTopic}”.`, `Hãy nói trong 2–3 phút về chủ đề: “${viTopic}”.`),
        pair('Use one clear structure, one example, and finish with a conclusion or next step.', 'Sử dụng một cấu trúc rõ ràng, một ví dụ và kết thúc bằng kết luận hoặc bước tiếp theo.')
      ];
    }
    if (lesson.day < 75) {
      return [
        pair('Imagine you are in a real job interview.', 'Hãy tưởng tượng bạn đang tham gia một buổi phỏng vấn xin việc thực tế.'),
        pair(`Answer this topic: “${enTopic}”.`, `Trả lời chủ đề này: “${viTopic}”.`),
        pair('Speak for 2–3 minutes.', 'Hãy nói trong 2–3 phút.'),
        pair('Include one real example.', 'Đưa vào một ví dụ thực tế.')
      ];
    }
    return [
      pair(`Role-play this real work situation: ${enTopic}.`, `Hãy nhập vai tình huống công việc thực tế này: ${viTopic}.`),
      pair('Speak continuously for 3–5 minutes.', 'Hãy nói liên tục trong 3–5 phút.'),
      pair('Ask questions, respond, summarize, and agree on a next step.', 'Đặt câu hỏi, phản hồi, tóm tắt và thống nhất bước tiếp theo.')
    ];
  }

  function challenge(lesson) {
    return [
      pair('Give yourself 5 seconds to start.', 'Cho bản thân 5 giây để bắt đầu.'),
      pair('Speak without restarting.', 'Nói liên tục, không bắt đầu lại.'),
      pair(`Finish Day ${lesson.day} with a 60-second version of the same answer.`, `Kết thúc Ngày ${lesson.day} bằng phiên bản 60 giây của cùng câu trả lời.`)
    ];
  }

  function title(lesson) {
    return pair(`Day ${lesson.day} — ${lesson.title}`, `Ngày ${lesson.day} — ${topicVi(lesson)}`);
  }

  function framework(lesson) {
    return pair(`${lesson.framework.name}: ${lesson.framework.steps}`, `${lesson.framework.name}: ${frameworkSteps[lesson.framework.steps]}`);
  }

  return {topics, phases, frameworkSteps, phrases, phraseExamples, quiz, topicVi, objective, listening, shadowing, speaking, challenge, title, framework};
})();
