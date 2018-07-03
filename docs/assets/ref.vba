Function view_wrapper(old_tag)

'Adding parts of the tag that remain static regardless of the original tag'

temp_tag_1 = "https://svastx.moatads.com/mediamathvpaid176399725163/template.xml?level1=[AD_ATTR.advertiser]&level2=[AD_ATTR.campaign]&level3=[AD_ATTR.strategy]&level4=[AD_ATTR.creative]&slicer1=[BID_ATTR.site]&"
temp_tag_2 = "&ad_title=MEDIAMATH_VPAID_Template_Title_Asset"
temp_tag_3 = "&zMoatBidId=[BID_ATTR.bid_id]&tmode=2&"

'Pulls in xml response from the original tag'

Set oRequest1 = CreateObject("WinHttp.WinHttpRequest.5.1")
oRequest1.Open "GET", old_tag
oRequest1.Send
Response = oRequest1.ResponseText

    'Pull the specific fields within the xml. For this task I need specifically the height and the width'
    
    Set xml_targeting = CreateObject("Msxml2.DOMDocument.3.0")
    xml_targeting.LoadXML Response
    
    wh = "ad_width=" & xml_targeting.SelectSingleNode("//MediaFile/@width").Text
    ht = "&ad_height=" & xml_targeting.SelectSingleNode("//MediaFile/@height").Text
    dur = "&ad_duration=" & Application.WorksheetFunction.EncodeURL(xml_targeting.SelectSingleNode("//Duration").Text)
    Debug.Print dur
    
'Encode the original vast tag'

old_tag_encode = "vast_url=" & Application.WorksheetFunction.EncodeURL(old_tag)
    
'Append everything!'
wrapped_tag = temp_tag_1 & wh & ht & temp_tag_2 & dur & temp_tag_3 & old_tag_encode


view_wrapper = wrapped_tag

End Function
