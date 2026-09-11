/* English 90 v9 content pack. Everything in this file is available offline. */
const E90_V9 = (() => {
  const categories = [
    ['opening','Mở đầu'],['self','Giới thiệu bản thân'],['clarify','Làm rõ'],['confirm','Xác nhận'],
    ['agree','Đồng ý và bất đồng'],['evidence','Đưa bằng chứng và ví dụ'],['solution','Đề xuất giải pháp'],
    ['deadline','Quản lý deadline'],['risk','Xử lý blocker và rủi ro'],['feedback','Feedback'],
    ['stakeholder','Stakeholder'],['interview','Phỏng vấn'],['presentation','Thuyết trình'],['close','Chốt quyết định và next step']
  ];

  const rows = [
    ['opening','Let’s start with the goal.','Hãy bắt đầu với mục tiêu.'],
    ['opening','Thanks for making time today.','Cảm ơn bạn đã dành thời gian hôm nay.'],
    ['opening','I’d like to set the context first.','Tôi muốn nêu bối cảnh trước.'],
    ['opening','Here is what I hope we can achieve.','Đây là điều tôi hy vọng chúng ta có thể đạt được.'],
    ['opening','Before we begin, can we align on the agenda?','Trước khi bắt đầu, chúng ta có thể thống nhất chương trình không?'],
    ['opening','I’ll keep this brief and focused.','Tôi sẽ trình bày ngắn gọn và tập trung.'],
    ['opening','There are two points I’d like to cover.','Có hai điểm tôi muốn đề cập.'],
    ['opening','Let me give you the short version.','Để tôi trình bày phiên bản ngắn gọn.'],
    ['opening','The purpose of this conversation is clear.','Mục đích của cuộc trao đổi này đã rõ.'],
    ['opening','Shall we begin with the highest priority?','Chúng ta bắt đầu với ưu tiên cao nhất nhé?'],
    ['opening','I appreciate everyone joining on time.','Tôi cảm kích mọi người đã tham gia đúng giờ.'],
    ['opening','We have twenty minutes, so let’s focus.','Chúng ta có hai mươi phút, vì vậy hãy tập trung.'],
    ['opening','I want to make sure we leave with a decision.','Tôi muốn bảo đảm chúng ta kết thúc với một quyết định.'],

    ['self','I’m responsible for product delivery.','Tôi phụ trách việc bàn giao sản phẩm.'],
    ['self','My role connects customers and the technical team.','Vai trò của tôi kết nối khách hàng và đội kỹ thuật.'],
    ['self','I mainly work on improving operations.','Tôi chủ yếu làm việc để cải thiện vận hành.'],
    ['self','My current focus is customer retention.','Trọng tâm hiện tại của tôi là giữ chân khách hàng.'],
    ['self','I’ve worked in this field for five years.','Tôi đã làm trong lĩnh vực này năm năm.'],
    ['self','What motivates me is solving practical problems.','Điều tạo động lực cho tôi là giải quyết vấn đề thực tế.'],
    ['self','I’m the main contact for this project.','Tôi là đầu mối chính của dự án này.'],
    ['self','My team supports the regional sales group.','Đội của tôi hỗ trợ nhóm bán hàng khu vực.'],
    ['self','I specialize in turning data into decisions.','Tôi chuyên biến dữ liệu thành quyết định.'],
    ['self','A big part of my job is managing priorities.','Một phần lớn công việc của tôi là quản lý ưu tiên.'],
    ['self','I joined the team to lead this transition.','Tôi tham gia đội để dẫn dắt quá trình chuyển đổi này.'],
    ['self','I work closely with design and engineering.','Tôi làm việc sát sao với thiết kế và kỹ thuật.'],
    ['self','My goal is to make complex work easier.','Mục tiêu của tôi là làm cho công việc phức tạp trở nên dễ hơn.'],

    ['clarify','Could you explain what success looks like?','Bạn có thể giải thích thành công sẽ trông như thế nào không?'],
    ['clarify','What do you mean by urgent?','Ý bạn nói khẩn cấp là như thế nào?'],
    ['clarify','Can you walk me through that example?','Bạn có thể giải thích từng bước ví dụ đó không?'],
    ['clarify','Which part should we prioritize?','Chúng ta nên ưu tiên phần nào?'],
    ['clarify','Are you referring to this release or the next one?','Bạn đang nói đến bản phát hành này hay bản tiếp theo?'],
    ['clarify','Could you be more specific about the risk?','Bạn có thể nói cụ thể hơn về rủi ro không?'],
    ['clarify','Let me check that I understood you correctly.','Để tôi kiểm tra xem mình đã hiểu đúng ý bạn chưa.'],
    ['clarify','What information is still missing?','Thông tin nào vẫn còn thiếu?'],
    ['clarify','Can we define the scope more clearly?','Chúng ta có thể xác định phạm vi rõ hơn không?'],
    ['clarify','Is that a requirement or a preference?','Đó là yêu cầu bắt buộc hay chỉ là mong muốn?'],
    ['clarify','Who is the final user in this case?','Ai là người dùng cuối trong trường hợp này?'],
    ['clarify','When you say quality, which metric matters?','Khi bạn nói chất lượng, chỉ số nào quan trọng?'],
    ['clarify','Could you give me a concrete example?','Bạn có thể cho tôi một ví dụ cụ thể không?'],

    ['confirm','So the target is Friday at noon.','Vậy mục tiêu là trưa thứ Sáu.'],
    ['confirm','Let me confirm the decision in writing.','Để tôi xác nhận quyết định bằng văn bản.'],
    ['confirm','We agree that quality comes first.','Chúng ta đồng ý rằng chất lượng là ưu tiên hàng đầu.'],
    ['confirm','I’ll repeat the key point to avoid confusion.','Tôi sẽ nhắc lại điểm chính để tránh nhầm lẫn.'],
    ['confirm','Can everyone confirm their action item?','Mọi người có thể xác nhận đầu việc của mình không?'],
    ['confirm','My understanding is that the scope stays unchanged.','Theo tôi hiểu thì phạm vi vẫn không thay đổi.'],
    ['confirm','We are aligned on the expected result.','Chúng ta đã thống nhất về kết quả mong đợi.'],
    ['confirm','Please correct me if I missed anything.','Vui lòng sửa nếu tôi bỏ sót điều gì.'],
    ['confirm','I’ll send a summary after this call.','Tôi sẽ gửi bản tóm tắt sau cuộc gọi này.'],
    ['confirm','The owner is Mai, and the due date is Tuesday.','Người phụ trách là Mai và hạn chót là thứ Ba.'],
    ['confirm','That matches what we discussed earlier.','Điều đó khớp với những gì chúng ta đã thảo luận trước đó.'],
    ['confirm','We have the same definition of done.','Chúng ta có cùng định nghĩa về hoàn thành.'],
    ['confirm','Can I confirm one final detail?','Tôi có thể xác nhận một chi tiết cuối cùng không?'],

    ['agree','I agree with the overall direction.','Tôi đồng ý với định hướng tổng thể.'],
    ['agree','That approach makes sense to me.','Cách tiếp cận đó hợp lý với tôi.'],
    ['agree','I support the idea with one condition.','Tôi ủng hộ ý tưởng này với một điều kiện.'],
    ['agree','I see the benefit, but I have one concern.','Tôi thấy lợi ích, nhưng tôi có một lo ngại.'],
    ['agree','I’m not convinced this solves the core problem.','Tôi chưa bị thuyết phục rằng điều này giải quyết vấn đề cốt lõi.'],
    ['agree','I respectfully disagree with that assumption.','Tôi xin phép không đồng ý với giả định đó.'],
    ['agree','Could we consider a different approach?','Chúng ta có thể cân nhắc một cách tiếp cận khác không?'],
    ['agree','I agree on the goal, not on the method.','Tôi đồng ý về mục tiêu, nhưng không đồng ý về phương pháp.'],
    ['agree','That is a fair point.','Đó là một ý kiến hợp lý.'],
    ['agree','I can support this if we reduce the scope.','Tôi có thể ủng hộ nếu chúng ta giảm phạm vi.'],
    ['agree','We may need to challenge that conclusion.','Chúng ta có thể cần xem xét lại kết luận đó.'],
    ['agree','Let’s separate facts from opinions.','Hãy tách biệt sự thật khỏi ý kiến.'],
    ['agree','I’m open to changing my view.','Tôi sẵn sàng thay đổi quan điểm của mình.'],

    ['evidence','The latest data supports this direction.','Dữ liệu mới nhất ủng hộ hướng đi này.'],
    ['evidence','For example, response time fell by twenty percent.','Ví dụ, thời gian phản hồi đã giảm hai mươi phần trăm.'],
    ['evidence','We saw the same pattern last quarter.','Chúng ta đã thấy cùng một xu hướng vào quý trước.'],
    ['evidence','Customer interviews point to one clear need.','Các cuộc phỏng vấn khách hàng chỉ ra một nhu cầu rõ ràng.'],
    ['evidence','The pilot gives us enough evidence to proceed.','Chương trình thử nghiệm cho chúng ta đủ bằng chứng để tiếp tục.'],
    ['evidence','Three teams reported the same issue.','Ba đội đã báo cáo cùng một vấn đề.'],
    ['evidence','The numbers are better than our baseline.','Các con số tốt hơn mức cơ sở của chúng ta.'],
    ['evidence','This example shows the practical impact.','Ví dụ này cho thấy tác động thực tế.'],
    ['evidence','The evidence is promising but still limited.','Bằng chứng đầy hứa hẹn nhưng vẫn còn hạn chế.'],
    ['evidence','We should test the assumption with real users.','Chúng ta nên kiểm tra giả định với người dùng thật.'],
    ['evidence','According to the survey, speed matters most.','Theo khảo sát, tốc độ là yếu tố quan trọng nhất.'],
    ['evidence','Let me compare the result with our target.','Để tôi so sánh kết quả với mục tiêu.'],
    ['evidence','One case does not prove the general rule.','Một trường hợp không chứng minh được quy luật chung.'],

    ['solution','One practical option is to run a small pilot.','Một phương án thực tế là thực hiện thử nghiệm nhỏ.'],
    ['solution','I suggest we simplify the first release.','Tôi đề xuất đơn giản hóa bản phát hành đầu tiên.'],
    ['solution','We could automate the repetitive step.','Chúng ta có thể tự động hóa bước lặp lại.'],
    ['solution','The safest solution is a phased rollout.','Giải pháp an toàn nhất là triển khai theo từng giai đoạn.'],
    ['solution','Let’s compare the cost and impact of each option.','Hãy so sánh chi phí và tác động của từng phương án.'],
    ['solution','A temporary workaround can keep us moving.','Một giải pháp tạm thời có thể giúp chúng ta tiếp tục.'],
    ['solution','My recommendation is to fix the root cause.','Đề xuất của tôi là khắc phục nguyên nhân gốc rễ.'],
    ['solution','We can solve this without adding headcount.','Chúng ta có thể giải quyết việc này mà không tăng nhân sự.'],
    ['solution','The first option gives us more flexibility.','Phương án đầu tiên cho chúng ta nhiều sự linh hoạt hơn.'],
    ['solution','I propose a two-week experiment.','Tôi đề xuất một thử nghiệm kéo dài hai tuần.'],
    ['solution','Let’s start small and measure the result.','Hãy bắt đầu nhỏ và đo lường kết quả.'],
    ['solution','Another option is to change the sequence.','Một phương án khác là thay đổi thứ tự.'],
    ['solution','This solution balances speed and quality.','Giải pháp này cân bằng tốc độ và chất lượng.'],

    ['deadline','We are still on track for the agreed date.','Chúng ta vẫn đúng tiến độ cho ngày đã thống nhất.'],
    ['deadline','The earliest realistic date is next Wednesday.','Ngày sớm nhất khả thi là thứ Tư tuần sau.'],
    ['deadline','We need two more days to finish the testing.','Chúng ta cần thêm hai ngày để hoàn tất kiểm thử.'],
    ['deadline','Can we move the deadline without affecting the launch?','Chúng ta có thể dời hạn mà không ảnh hưởng ngày ra mắt không?'],
    ['deadline','I can commit to the draft by Friday.','Tôi có thể cam kết hoàn thành bản nháp trước thứ Sáu.'],
    ['deadline','Let’s protect the critical milestone.','Hãy bảo vệ cột mốc quan trọng.'],
    ['deadline','The delay affects the review, not the launch.','Sự chậm trễ ảnh hưởng việc rà soát, không ảnh hưởng ra mắt.'],
    ['deadline','We should add one day of contingency.','Chúng ta nên thêm một ngày dự phòng.'],
    ['deadline','Which deliverable is time-sensitive?','Hạng mục bàn giao nào nhạy cảm về thời gian?'],
    ['deadline','I’ll flag any risk to the date immediately.','Tôi sẽ báo ngay mọi rủi ro đối với thời hạn.'],
    ['deadline','The revised timeline is more realistic.','Tiến độ điều chỉnh thực tế hơn.'],
    ['deadline','Can we confirm the handoff time?','Chúng ta có thể xác nhận thời gian bàn giao không?'],
    ['deadline','We need a decision today to meet the deadline.','Chúng ta cần quyết định hôm nay để kịp hạn.'],

    ['risk','The main blocker is access to the test data.','Trở ngại chính là quyền truy cập dữ liệu kiểm thử.'],
    ['risk','This dependency could delay the release.','Phụ thuộc này có thể làm chậm bản phát hành.'],
    ['risk','The risk is manageable if we act today.','Rủi ro có thể kiểm soát nếu chúng ta hành động hôm nay.'],
    ['risk','We need an owner for this blocker.','Chúng ta cần một người phụ trách trở ngại này.'],
    ['risk','I’m escalating this because the impact is high.','Tôi báo cáo việc này lên cấp trên vì tác động lớn.'],
    ['risk','The fallback plan is ready.','Kế hoạch dự phòng đã sẵn sàng.'],
    ['risk','We have identified two major risks.','Chúng ta đã xác định hai rủi ro lớn.'],
    ['risk','This issue is outside our team’s control.','Vấn đề này nằm ngoài tầm kiểm soát của đội chúng ta.'],
    ['risk','We can reduce the risk by limiting the scope.','Chúng ta có thể giảm rủi ro bằng cách giới hạn phạm vi.'],
    ['risk','The impact is low, but the likelihood is high.','Tác động thấp, nhưng khả năng xảy ra cao.'],
    ['risk','I need help removing this dependency.','Tôi cần hỗ trợ để loại bỏ phụ thuộc này.'],
    ['risk','Let’s review the mitigation plan.','Hãy xem lại kế hoạch giảm thiểu rủi ro.'],
    ['risk','We should not ignore this warning sign.','Chúng ta không nên bỏ qua dấu hiệu cảnh báo này.'],

    ['feedback','One thing that worked well was your clear summary.','Một điều làm tốt là phần tóm tắt rõ ràng của bạn.'],
    ['feedback','The message would be stronger with one example.','Thông điệp sẽ thuyết phục hơn nếu có một ví dụ.'],
    ['feedback','Could you make the next step more specific?','Bạn có thể làm cho bước tiếp theo cụ thể hơn không?'],
    ['feedback','I appreciate how quickly you responded.','Tôi đánh giá cao việc bạn phản hồi nhanh.'],
    ['feedback','Next time, involve the team earlier.','Lần tới, hãy cho đội tham gia sớm hơn.'],
    ['feedback','Your structure made the update easy to follow.','Cấu trúc của bạn giúp bản cập nhật dễ theo dõi.'],
    ['feedback','The opening was clear, but the ending felt rushed.','Phần mở đầu rõ, nhưng phần kết có vẻ vội.'],
    ['feedback','Can I share one observation?','Tôi có thể chia sẻ một nhận xét không?'],
    ['feedback','I’d like feedback on the clarity of my message.','Tôi muốn nhận phản hồi về độ rõ ràng của thông điệp.'],
    ['feedback','That feedback is helpful and actionable.','Phản hồi đó hữu ích và có thể hành động được.'],
    ['feedback','I’ll apply that suggestion in the next version.','Tôi sẽ áp dụng đề xuất đó trong phiên bản tiếp theo.'],
    ['feedback','What could I do differently next time?','Lần tới tôi có thể làm gì khác đi?'],
    ['feedback','Let’s focus the feedback on observable behavior.','Hãy tập trung phản hồi vào hành vi quan sát được.'],

    ['stakeholder','The customer needs visibility before the launch.','Khách hàng cần nắm thông tin trước khi ra mắt.'],
    ['stakeholder','Finance is concerned about the total cost.','Bộ phận tài chính lo ngại về tổng chi phí.'],
    ['stakeholder','We should involve legal before making a promise.','Chúng ta nên cho pháp lý tham gia trước khi đưa ra cam kết.'],
    ['stakeholder','The sponsor expects a weekly update.','Nhà tài trợ mong đợi cập nhật hằng tuần.'],
    ['stakeholder','Who needs to approve this decision?','Ai cần phê duyệt quyết định này?'],
    ['stakeholder','Let’s map the impact on each team.','Hãy lập bản đồ tác động lên từng đội.'],
    ['stakeholder','The support team has important context.','Đội hỗ trợ có bối cảnh quan trọng.'],
    ['stakeholder','We need buy-in from regional leaders.','Chúng ta cần sự ủng hộ của các lãnh đạo khu vực.'],
    ['stakeholder','I’ll manage expectations with the client.','Tôi sẽ quản lý kỳ vọng với khách hàng.'],
    ['stakeholder','The decision affects more than one department.','Quyết định ảnh hưởng đến nhiều hơn một phòng ban.'],
    ['stakeholder','Can we identify the decision maker?','Chúng ta có thể xác định người ra quyết định không?'],
    ['stakeholder','I’ll share the trade-offs transparently.','Tôi sẽ chia sẻ các đánh đổi một cách minh bạch.'],
    ['stakeholder','Their priority is reliability, not speed.','Ưu tiên của họ là độ tin cậy, không phải tốc độ.'],

    ['interview','I’m interested in this role because of its impact.','Tôi quan tâm vị trí này vì tác động của nó.'],
    ['interview','My strongest skill is structured problem-solving.','Kỹ năng mạnh nhất của tôi là giải quyết vấn đề có cấu trúc.'],
    ['interview','A recent example demonstrates this strength.','Một ví dụ gần đây thể hiện điểm mạnh này.'],
    ['interview','I learned an important lesson from that failure.','Tôi đã học được một bài học quan trọng từ thất bại đó.'],
    ['interview','My role in the project was clearly defined.','Vai trò của tôi trong dự án được xác định rõ.'],
    ['interview','The result exceeded our original target.','Kết quả vượt mục tiêu ban đầu của chúng tôi.'],
    ['interview','I handled the conflict by listening first.','Tôi xử lý xung đột bằng cách lắng nghe trước.'],
    ['interview','I’m working on becoming a better delegator.','Tôi đang cải thiện khả năng giao việc.'],
    ['interview','This opportunity fits my long-term goal.','Cơ hội này phù hợp với mục tiêu dài hạn của tôi.'],
    ['interview','I can contribute from the first month.','Tôi có thể đóng góp ngay từ tháng đầu tiên.'],
    ['interview','I measure success through customer outcomes.','Tôi đo lường thành công qua kết quả của khách hàng.'],
    ['interview','I would ask the team for context before acting.','Tôi sẽ hỏi đội về bối cảnh trước khi hành động.'],
    ['interview','What would success look like in this role?','Thành công trong vai trò này sẽ trông như thế nào?'],

    ['presentation','The key message is simple.','Thông điệp chính rất đơn giản.'],
    ['presentation','This chart shows a steady improvement.','Biểu đồ này cho thấy sự cải thiện ổn định.'],
    ['presentation','There are three reasons behind the result.','Có ba lý do đằng sau kết quả.'],
    ['presentation','Let me highlight the most important number.','Để tôi nhấn mạnh con số quan trọng nhất.'],
    ['presentation','I’ll pause here for questions.','Tôi sẽ dừng ở đây để nhận câu hỏi.'],
    ['presentation','The next slide explains the customer impact.','Trang tiếp theo giải thích tác động đến khách hàng.'],
    ['presentation','Please focus on the overall trend.','Vui lòng tập trung vào xu hướng tổng thể.'],
    ['presentation','This brings us to the recommended option.','Điều này đưa chúng ta đến phương án được đề xuất.'],
    ['presentation','I’ll close with one practical takeaway.','Tôi sẽ kết thúc với một điểm thực tế cần ghi nhớ.'],
    ['presentation','The data tells a consistent story.','Dữ liệu kể một câu chuyện nhất quán.'],
    ['presentation','Let me put this number in context.','Để tôi đặt con số này vào bối cảnh.'],
    ['presentation','We can discuss the details after the overview.','Chúng ta có thể thảo luận chi tiết sau phần tổng quan.'],
    ['presentation','Thank you; I’m happy to take questions.','Cảm ơn; tôi sẵn sàng trả lời câu hỏi.'],

    ['close','We’ve agreed to proceed with option two.','Chúng ta đã đồng ý tiếp tục với phương án hai.'],
    ['close','The next step is a customer test.','Bước tiếp theo là thử nghiệm với khách hàng.'],
    ['close','I’ll own the draft and send it by Thursday.','Tôi sẽ phụ trách bản nháp và gửi trước thứ Năm.'],
    ['close','Let’s meet again next Tuesday.','Hãy gặp lại vào thứ Ba tuần sau.'],
    ['close','We have a decision and a clear owner.','Chúng ta có quyết định và người phụ trách rõ ràng.'],
    ['close','I’ll document the action items today.','Tôi sẽ ghi lại các đầu việc hôm nay.'],
    ['close','Can we confirm the final deadline?','Chúng ta có thể xác nhận hạn chót cuối cùng không?'],
    ['close','No further action is needed from your team.','Đội của bạn không cần hành động thêm.'],
    ['close','We’ll review the result at the next check-in.','Chúng ta sẽ xem lại kết quả ở buổi cập nhật tiếp theo.'],
    ['close','Let’s close the loop with the client.','Hãy phản hồi đầy đủ lại cho khách hàng.'],
    ['close','The decision is effective from Monday.','Quyết định có hiệu lực từ thứ Hai.'],
    ['close','I’ll follow up if anything changes.','Tôi sẽ liên hệ lại nếu có thay đổi.'],
    ['close','To recap, we have three action items.','Tóm lại, chúng ta có ba đầu việc.']
  ];

  /* 14 groups x 13 items = 182; keep 180 so the 720 daily slots produce four appearances each. */
  const phraseBank = rows.slice(0,180).map(([category,en,vi],index)=>({id:`p${String(index+1).padStart(3,'0')}`,category,en,vi,important:true}));
  const categoryNames=Object.fromEntries(categories);
  const teams=[['product team','đội sản phẩm'],['support team','đội hỗ trợ'],['sales team','đội bán hàng'],['engineering team','đội kỹ thuật'],['operations team','đội vận hành'],['design team','đội thiết kế'],['finance team','đội tài chính'],['marketing team','đội tiếp thị'],['regional team','đội khu vực'],['leadership team','ban lãnh đạo']];
  const stakeholders=[['a key customer','một khách hàng quan trọng'],['the project sponsor','nhà tài trợ dự án'],['a regional manager','một quản lý khu vực'],['the delivery partner','đối tác bàn giao'],['the legal reviewer','người rà soát pháp lý'],['the hiring manager','quản lý tuyển dụng'],['the client team','đội khách hàng'],['the executive group','nhóm điều hành'],['the data owner','người sở hữu dữ liệu']];
  const assets=[['a new onboarding flow','một luồng hướng dẫn người dùng mới'],['the quarterly release','bản phát hành quý'],['a customer dashboard','bảng điều khiển khách hàng'],['the renewal proposal','đề xuất gia hạn'],['a service migration','việc chuyển đổi dịch vụ'],['the interview process','quy trình phỏng vấn'],['a product demonstration','buổi trình diễn sản phẩm'],['the support workflow','quy trình hỗ trợ'],['the regional launch','đợt ra mắt khu vực']];
  const constraints=[['testing found a reliability issue','kiểm thử phát hiện vấn đề về độ tin cậy'],['the budget is ten percent lower','ngân sách thấp hơn mười phần trăm'],['customer feedback changed the priority','phản hồi khách hàng đã làm thay đổi ưu tiên'],['one dependency is two days late','một phụ thuộc bị chậm hai ngày'],['the success metric is still unclear','chỉ số thành công vẫn chưa rõ'],['two teams want different outcomes','hai đội mong muốn kết quả khác nhau'],['the deadline cannot move','hạn chót không thể thay đổi'],['the available data is incomplete','dữ liệu hiện có chưa đầy đủ'],['the first pilot missed its target','thử nghiệm đầu tiên không đạt mục tiêu'],['a key reviewer is unavailable','một người rà soát quan trọng không có mặt']];
  const outcomes=[['choose a smaller first release','chọn bản phát hành đầu tiên nhỏ hơn'],['confirm a realistic Friday deadline','xác nhận hạn chót thực tế vào thứ Sáu'],['assign an owner to the blocker','chỉ định người phụ trách trở ngại'],['approve a two-week pilot','phê duyệt thử nghiệm hai tuần'],['schedule a customer follow-up','lên lịch trao đổi tiếp với khách hàng'],['agree on the success metric','thống nhất chỉ số thành công'],['select the safer option','chọn phương án an toàn hơn'],['document the final decision','ghi lại quyết định cuối cùng'],['set the next review meeting','đặt lịch họp rà soát tiếp theo']];
  const pair=(en,vi)=>({en,vi});

  function scenarioFor(day,lesson){
    const team=teams[(day-1)%teams.length],stakeholder=stakeholders[(day*5+1)%stakeholders.length],asset=assets[(day*7+2)%assets.length],constraint=constraints[(day*3+4)%constraints.length],outcome=outcomes[(day*11+3)%outcomes.length];
    return {id:`scenario-${day}`,title:pair(`${asset[0]} decision`,`Quyết định về ${asset[1]}`),team:pair(...team),stakeholder:pair(...stakeholder),asset:pair(...asset),constraint:pair(...constraint),outcome:pair(...outcome),
      context:pair(`The ${team[0]} is meeting ${stakeholder[0]} to discuss ${asset[0]}. The group must ${outcome[0]} before the meeting ends.`,` ${team[1]} đang họp với ${stakeholder[1]} để thảo luận về ${asset[1]}. Nhóm phải ${outcome[1]} trước khi cuộc họp kết thúc.`.trim())};
  }
  function dailyPhrases(day){return Array.from({length:8},(_,slot)=>phraseBank[(((day-1)*8+slot)*47)%phraseBank.length]);}
  function application(item,scenario,index){
    const details=[
      pair(`This matters because ${scenario.constraint.en}.`,`Điều này quan trọng vì ${scenario.constraint.vi}.`),
      pair(`The discussion concerns ${scenario.asset.en}.`,`Cuộc thảo luận liên quan đến ${scenario.asset.vi}.`),
      pair(`The team needs to ${scenario.outcome.en}.`,`Đội cần ${scenario.outcome.vi}.`)
    ][index%3];
    return pair(`${item.en} ${details.en}`,`${item.vi} ${details.vi}`);
  }
  function buildListening(day,lesson,items,scenario){
    const intro=pair(`This morning, the ${scenario.team.en} meets ${scenario.stakeholder.en} about ${scenario.asset.en}.`,`Sáng nay, ${scenario.team.vi} họp với ${scenario.stakeholder.vi} về ${scenario.asset.vi}.`);
    const problem=pair(`The conversation is important because ${scenario.constraint.en}.`,`Cuộc trao đổi quan trọng vì ${scenario.constraint.vi}.`);
    const applications=items.slice(0,5).map((item,index)=>application(item,scenario,index));
    const decision=pair(`After comparing the trade-offs, they ${scenario.outcome.en}.`,`Sau khi so sánh các đánh đổi, họ ${scenario.outcome.vi}.`);
    const follow=pair(`They confirm the owner, record the deadline, and schedule a follow-up before leaving the room.`,`Họ xác nhận người phụ trách, ghi lại hạn chót và lên lịch trao đổi tiếp trước khi rời phòng.`);
    return [intro,problem,...applications,decision,follow];
  }
  function buildConversation(items,scenario){
    const branchData={
      agree:{label:pair('Agree','Đồng ý'),opening:pair('I think the first option gives us enough speed. Can you support it?','Tôi nghĩ phương án đầu tiên cho chúng ta đủ tốc độ. Bạn có ủng hộ không?'),outcome:pair(`The group agrees to ${scenario.outcome.en} and confirms Friday as the checkpoint.`,`Nhóm đồng ý ${scenario.outcome.vi} và xác nhận thứ Sáu là mốc kiểm tra.`)},
      disagree:{label:pair('Disagree','Không đồng ý'),opening:pair('I want to move ahead today, even with the current risk. Do you agree?','Tôi muốn tiếp tục ngay hôm nay dù có rủi ro hiện tại. Bạn có đồng ý không?'),outcome:pair('The group chooses the safer option, assigns an owner, and reviews progress on Monday.','Nhóm chọn phương án an toàn hơn, chỉ định người phụ trách và xem lại tiến độ vào thứ Hai.')},
      clarify:{label:pair('Need more information','Cần thêm thông tin'),opening:pair('We need a decision now. Is there anything else you need to know?','Chúng ta cần quyết định ngay. Bạn còn cần biết thêm điều gì không?'),outcome:pair('The group requests the missing evidence and schedules a decision meeting for Tuesday.','Nhóm yêu cầu bằng chứng còn thiếu và lên lịch họp quyết định vào thứ Ba.')}
    };
    const stages=[
      pair('Respond to the proposal and explain your position.','Phản hồi đề xuất và giải thích quan điểm của bạn.'),
      pair('Address the risk or ask for the missing evidence.','Xử lý rủi ro hoặc yêu cầu bằng chứng còn thiếu.'),
      pair('Propose a concrete option and deadline.','Đề xuất một phương án và hạn chót cụ thể.'),
      pair('Confirm the decision, owner, and follow-up.','Xác nhận quyết định, người phụ trách và lịch trao đổi tiếp.')
    ];
    return {context:scenario.context,branches:Object.fromEntries(Object.entries(branchData).map(([key,value])=>[key,{...value,turns:stages.map((stage,index)=>({phrase:items[index].en,prompt:{speaker:'Đồng nghiệp',...pair(index?stage.en:value.opening.en,index?stage.vi:value.opening.vi)},response:{speaker:'Bạn',...application(items[index],scenario,index)}}))}]))};
  }
  function pronunciation(item,index){
    const words=item.en.replace(/[?.]/g,'').split(' '),mid=Math.max(2,Math.ceil(words.length/2));
    const stressed=words.map((word,i)=>i===Math.min(words.length-1,Math.max(1,index%words.length))?`**${word.toUpperCase()}**`:word);
    return {chunks:`${stressed.slice(0,mid).join(' ')} / ${stressed.slice(mid).join(' ')}`,note:index%2?'Link the final consonant to the next vowel; keep the key word strong.':'Reduce function words; let the final content word carry the main stress.',noteVi:index%2?'Nối phụ âm cuối với nguyên âm tiếp theo; nhấn rõ từ khóa.':'Đọc nhẹ các từ chức năng; đặt trọng âm chính ở từ nội dung cuối.'};
  }
  function upgradeLessons(lessons,E90){
    phraseBank.forEach(item=>{
      E90.phrases[item.en]=item.vi;
      E90.phraseExamples[item.en]=[
        pair(`In the planning meeting, Linh said, “${item.en}”`,`Trong cuộc họp lập kế hoạch, Linh nói: “${item.vi}”`),
        pair(`During the client call, the team used this line: “${item.en}”`,`Trong cuộc gọi khách hàng, đội đã dùng câu này: “${item.vi}”`),
        pair(`To keep the project moving, I said, “${item.en}”`,`Để dự án tiếp tục tiến triển, tôi nói: “${item.vi}”`)
      ];
    });
    lessons.forEach(lesson=>{
      const items=dailyPhrases(lesson.day),scenario=scenarioFor(lesson.day,lesson),listening=buildListening(lesson.day,lesson,items,scenario);
      lesson.phrases=items.map(item=>item.en);
      lesson.listening=listening.map(item=>item.en).join(' ');
      lesson.shadowing=listening.slice(2,7).map(item=>item.en).join(' ');
      lesson.v9={scenario,listening,shadowing:listening.slice(2,7),conversation:buildConversation(items,scenario),pronunciation:items.slice(0,4).map(pronunciation),questions:[
        {type:'main',q:pair('What is the main purpose of the meeting?','Mục đích chính của cuộc họp là gì?'),answer:scenario.outcome},
        {type:'detail',q:pair('What constraint is affecting the work?','Ràng buộc nào đang ảnh hưởng công việc?'),answer:scenario.constraint},
        {type:'inference',q:pair('Why do they schedule a follow-up?','Tại sao họ lên lịch trao đổi tiếp?'),answer:pair('They need to verify progress and keep the decision accountable.','Họ cần xác minh tiến độ và bảo đảm trách nhiệm với quyết định.')},
        {type:'dictation',q:pair('Type the short sentence you hear.','Nhập câu ngắn bạn nghe được.'),answer:items[0]}
      ],mission:weeklyMission(lesson.day,scenario)};
    });
    E90.listening=lesson=>lesson.v9.listening;
    E90.shadowing=lesson=>lesson.v9.shadowing;
    E90.conversation=lesson=>lesson.v9.conversation;
  }
  const missionTypes=[pair('Stand-up update','Cập nhật stand-up'),pair('Voice update','Cập nhật bằng giọng nói'),pair('Decision presentation','Trình bày quyết định'),pair('Mock interview','Phỏng vấn thử'),pair('Client call','Cuộc gọi khách hàng'),pair('Product explanation','Giải thích sản phẩm')];
  function weeklyMission(day,scenario){const week=Math.ceil(day/7),type=missionTypes[(week-1)%missionTypes.length];return {week,type,prompt:pair(`Complete a ${type.en.toLowerCase()} about ${scenario.asset.en}. State the issue, recommendation, owner, and next date.`,`Thực hiện ${type.vi.toLowerCase()} về ${scenario.asset.vi}. Nêu vấn đề, đề xuất, người phụ trách và mốc tiếp theo.`)};}
  return {version:9,categories,categoryNames,phraseBank,pair,upgradeLessons,weeklyMission};
})();
