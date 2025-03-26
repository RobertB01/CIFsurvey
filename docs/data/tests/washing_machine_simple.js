const xml_washing_machine_simple = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;washing_machine_simple.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
  <components xmi:type="automata:Automaton" xmi:id="3" name="washingMachine">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;washing_machine_simple.cif&quot;: " startLine="1" endOffset="23" startColumn="11" endLine="1" endColumn="24" startOffset="10" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="5" name="insertCoin" controllable="false">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;washing_machine_simple.cif&quot;: " startLine="2" endOffset="61" startColumn="26" endLine="2" endColumn="35" startOffset="52" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="7" name="returnCoin" controllable="false">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;washing_machine_simple.cif&quot;: " startLine="2" endOffset="73" startColumn="38" endLine="2" endColumn="47" startOffset="64" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="9" name="select90" controllable="false">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;washing_machine_simple.cif&quot;: " startLine="2" endOffset="83" startColumn="50" endLine="2" endColumn="57" startOffset="76" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="11" name="select40" controllable="false">
      <position xmi:type="position:Position" xmi:id="12" source="File &quot;washing_machine_simple.cif&quot;: " startLine="2" endOffset="93" startColumn="60" endLine="2" endColumn="67" startOffset="86" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="13" name="openDoor" controllable="false">
      <position xmi:type="position:Position" xmi:id="14" source="File &quot;washing_machine_simple.cif&quot;: " startLine="2" endOffset="103" startColumn="70" endLine="2" endColumn="77" startOffset="96" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="15" name="closeDoor" controllable="false">
      <position xmi:type="position:Position" xmi:id="16" source="File &quot;washing_machine_simple.cif&quot;: " startLine="2" endOffset="114" startColumn="80" endLine="2" endColumn="88" startOffset="106" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
    </declarations>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="17" name="coins">
      <position xmi:type="position:Position" xmi:id="18" source="File &quot;washing_machine_simple.cif&quot;: " startLine="3" endOffset="135" startColumn="14" endLine="3" endColumn="18" startOffset="131" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
      <type xmi:type="types:IntType" xmi:id="19">
        <position xmi:type="position:Position" xmi:id="20" source="File &quot;washing_machine_simple.cif&quot;: " startLine="3" endOffset="129" startColumn="10" endLine="3" endColumn="12" startOffset="127" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="21">
        <position xmi:type="position:Position" xmi:id="22" source="File &quot;washing_machine_simple.cif&quot;: " startLine="3" endOffset="135" startColumn="14" endLine="3" endColumn="18" startOffset="131" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="23">
          <position xmi:type="position:Position" xmi:id="24" source="File &quot;washing_machine_simple.cif&quot;: " startLine="3" endOffset="139" startColumn="22" endLine="3" endColumn="22" startOffset="139" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <type xmi:type="types:IntType" xmi:id="25" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="26" source="File &quot;washing_machine_simple.cif&quot;: " startLine="3" endOffset="139" startColumn="22" endLine="3" endColumn="22" startOffset="139" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="27" name="ready">
      <position xmi:type="position:Position" xmi:id="28" source="File &quot;washing_machine_simple.cif&quot;: " startLine="5" endOffset="162" startColumn="14" endLine="5" endColumn="18" startOffset="158" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="29" value="true">
        <position xmi:type="position:Position" xmi:id="30" source="File &quot;washing_machine_simple.cif&quot;: " startLine="6" endOffset="180" startColumn="9" endLine="6" endColumn="15" startOffset="174" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <type xmi:type="types:BoolType" xmi:id="31">
          <position xmi:type="position:Position" xmi:id="32" source="File &quot;washing_machine_simple.cif&quot;: " startLine="6" endOffset="180" startColumn="9" endLine="6" endColumn="15" startOffset="174" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="33">
        <position xmi:type="position:Position" xmi:id="34" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="203" startColumn="9" endLine="7" endColumn="12" startOffset="200" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="35">
          <position xmi:type="position:Position" xmi:id="36" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="214" startColumn="14" endLine="7" endColumn="23" startOffset="205" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="37" event="7">
            <position xmi:type="position:Position" xmi:id="38" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="214" startColumn="14" endLine="7" endColumn="23" startOffset="205" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="39">
              <position xmi:type="position:Position" xmi:id="40" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="214" startColumn="14" endLine="7" endColumn="23" startOffset="205" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="41" operator="GreaterEqual">
          <position xmi:type="position:Position" xmi:id="42" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="228" startColumn="36" endLine="7" endColumn="37" startOffset="227" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <type xmi:type="types:BoolType" xmi:id="43">
            <position xmi:type="position:Position" xmi:id="44" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="228" startColumn="36" endLine="7" endColumn="37" startOffset="227" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="45" variable="17">
            <position xmi:type="position:Position" xmi:id="46" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="225" startColumn="30" endLine="7" endColumn="34" startOffset="221" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="47">
              <position xmi:type="position:Position" xmi:id="48" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="225" startColumn="30" endLine="7" endColumn="34" startOffset="221" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="49" value="1">
            <position xmi:type="position:Position" xmi:id="50" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="230" startColumn="39" endLine="7" endColumn="39" startOffset="230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="51" lower="1" upper="1">
              <position xmi:type="position:Position" xmi:id="52" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="230" startColumn="39" endLine="7" endColumn="39" startOffset="230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="53">
          <position xmi:type="position:Position" xmi:id="54" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="242" startColumn="50" endLine="7" endColumn="51" startOffset="241" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="55" variable="17">
            <position xmi:type="position:Position" xmi:id="56" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="239" startColumn="44" endLine="7" endColumn="48" startOffset="235" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="57">
              <position xmi:type="position:Position" xmi:id="58" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="239" startColumn="44" endLine="7" endColumn="48" startOffset="235" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="59" operator="Subtraction">
            <position xmi:type="position:Position" xmi:id="60" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="250" startColumn="59" endLine="7" endColumn="59" startOffset="250" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="61">
              <position xmi:type="position:Position" xmi:id="62" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="250" startColumn="59" endLine="7" endColumn="59" startOffset="250" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="63" variable="17">
              <position xmi:type="position:Position" xmi:id="64" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="248" startColumn="53" endLine="7" endColumn="57" startOffset="244" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="65">
                <position xmi:type="position:Position" xmi:id="66" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="248" startColumn="53" endLine="7" endColumn="57" startOffset="244" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="67" value="1">
              <position xmi:type="position:Position" xmi:id="68" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="251" startColumn="60" endLine="7" endColumn="60" startOffset="251" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="69" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="70" source="File &quot;washing_machine_simple.cif&quot;: " startLine="7" endOffset="251" startColumn="60" endLine="7" endColumn="60" startOffset="251" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="71">
        <position xmi:type="position:Position" xmi:id="72" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="266" startColumn="9" endLine="8" endColumn="12" startOffset="263" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="73">
          <position xmi:type="position:Position" xmi:id="74" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="277" startColumn="14" endLine="8" endColumn="23" startOffset="268" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="75" event="5">
            <position xmi:type="position:Position" xmi:id="76" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="277" startColumn="14" endLine="8" endColumn="23" startOffset="268" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="77">
              <position xmi:type="position:Position" xmi:id="78" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="277" startColumn="14" endLine="8" endColumn="23" startOffset="268" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="79">
          <position xmi:type="position:Position" xmi:id="80" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="289" startColumn="34" endLine="8" endColumn="35" startOffset="288" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="81" variable="17">
            <position xmi:type="position:Position" xmi:id="82" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="286" startColumn="28" endLine="8" endColumn="32" startOffset="282" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="83">
              <position xmi:type="position:Position" xmi:id="84" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="286" startColumn="28" endLine="8" endColumn="32" startOffset="282" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="85" operator="Addition">
            <position xmi:type="position:Position" xmi:id="86" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="297" startColumn="43" endLine="8" endColumn="43" startOffset="297" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="87">
              <position xmi:type="position:Position" xmi:id="88" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="297" startColumn="43" endLine="8" endColumn="43" startOffset="297" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="89" variable="17">
              <position xmi:type="position:Position" xmi:id="90" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="295" startColumn="37" endLine="8" endColumn="41" startOffset="291" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="91">
                <position xmi:type="position:Position" xmi:id="92" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="295" startColumn="37" endLine="8" endColumn="41" startOffset="291" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="93" value="1">
              <position xmi:type="position:Position" xmi:id="94" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="298" startColumn="44" endLine="8" endColumn="44" startOffset="298" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="95" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="96" source="File &quot;washing_machine_simple.cif&quot;: " startLine="8" endOffset="298" startColumn="44" endLine="8" endColumn="44" startOffset="298" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="97" target="109">
        <position xmi:type="position:Position" xmi:id="98" source="File &quot;washing_machine_simple.cif&quot;: " startLine="9" endOffset="313" startColumn="9" endLine="9" endColumn="12" startOffset="310" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="99">
          <position xmi:type="position:Position" xmi:id="100" source="File &quot;washing_machine_simple.cif&quot;: " startLine="9" endOffset="323" startColumn="14" endLine="9" endColumn="22" startOffset="315" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="101" event="15">
            <position xmi:type="position:Position" xmi:id="102" source="File &quot;washing_machine_simple.cif&quot;: " startLine="9" endOffset="323" startColumn="14" endLine="9" endColumn="22" startOffset="315" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="103">
              <position xmi:type="position:Position" xmi:id="104" source="File &quot;washing_machine_simple.cif&quot;: " startLine="9" endOffset="323" startColumn="14" endLine="9" endColumn="22" startOffset="315" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="105" value="true">
        <position xmi:type="position:Position" xmi:id="106" source="File &quot;washing_machine_simple.cif&quot;: " startLine="6" endOffset="188" startColumn="18" endLine="6" endColumn="23" startOffset="183" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <type xmi:type="types:BoolType" xmi:id="107">
          <position xmi:type="position:Position" xmi:id="108" source="File &quot;washing_machine_simple.cif&quot;: " startLine="6" endOffset="188" startColumn="18" endLine="6" endColumn="23" startOffset="183" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="109" name="closedDoors">
      <position xmi:type="position:Position" xmi:id="110" source="File &quot;washing_machine_simple.cif&quot;: " startLine="11" endOffset="369" startColumn="14" endLine="11" endColumn="24" startOffset="359" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="111" target="27">
        <position xmi:type="position:Position" xmi:id="112" source="File &quot;washing_machine_simple.cif&quot;: " startLine="13" endOffset="401" startColumn="9" endLine="13" endColumn="12" startOffset="398" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="113">
          <position xmi:type="position:Position" xmi:id="114" source="File &quot;washing_machine_simple.cif&quot;: " startLine="13" endOffset="410" startColumn="14" endLine="13" endColumn="21" startOffset="403" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="115" event="13">
            <position xmi:type="position:Position" xmi:id="116" source="File &quot;washing_machine_simple.cif&quot;: " startLine="13" endOffset="410" startColumn="14" endLine="13" endColumn="21" startOffset="403" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="117">
              <position xmi:type="position:Position" xmi:id="118" source="File &quot;washing_machine_simple.cif&quot;: " startLine="13" endOffset="410" startColumn="14" endLine="13" endColumn="21" startOffset="403" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="119">
        <position xmi:type="position:Position" xmi:id="120" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="436" startColumn="9" endLine="14" endColumn="12" startOffset="433" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="121">
          <position xmi:type="position:Position" xmi:id="122" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="447" startColumn="14" endLine="14" endColumn="23" startOffset="438" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="123" event="7">
            <position xmi:type="position:Position" xmi:id="124" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="447" startColumn="14" endLine="14" endColumn="23" startOffset="438" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="125">
              <position xmi:type="position:Position" xmi:id="126" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="447" startColumn="14" endLine="14" endColumn="23" startOffset="438" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="127" operator="GreaterEqual">
          <position xmi:type="position:Position" xmi:id="128" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="461" startColumn="36" endLine="14" endColumn="37" startOffset="460" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <type xmi:type="types:BoolType" xmi:id="129">
            <position xmi:type="position:Position" xmi:id="130" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="461" startColumn="36" endLine="14" endColumn="37" startOffset="460" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="131" variable="17">
            <position xmi:type="position:Position" xmi:id="132" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="458" startColumn="30" endLine="14" endColumn="34" startOffset="454" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="133">
              <position xmi:type="position:Position" xmi:id="134" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="458" startColumn="30" endLine="14" endColumn="34" startOffset="454" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="135" value="1">
            <position xmi:type="position:Position" xmi:id="136" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="463" startColumn="39" endLine="14" endColumn="39" startOffset="463" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="137" lower="1" upper="1">
              <position xmi:type="position:Position" xmi:id="138" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="463" startColumn="39" endLine="14" endColumn="39" startOffset="463" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="139">
          <position xmi:type="position:Position" xmi:id="140" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="475" startColumn="50" endLine="14" endColumn="51" startOffset="474" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="141" variable="17">
            <position xmi:type="position:Position" xmi:id="142" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="472" startColumn="44" endLine="14" endColumn="48" startOffset="468" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="143">
              <position xmi:type="position:Position" xmi:id="144" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="472" startColumn="44" endLine="14" endColumn="48" startOffset="468" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="145" operator="Subtraction">
            <position xmi:type="position:Position" xmi:id="146" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="483" startColumn="59" endLine="14" endColumn="59" startOffset="483" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="147">
              <position xmi:type="position:Position" xmi:id="148" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="483" startColumn="59" endLine="14" endColumn="59" startOffset="483" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="149" variable="17">
              <position xmi:type="position:Position" xmi:id="150" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="481" startColumn="53" endLine="14" endColumn="57" startOffset="477" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="151">
                <position xmi:type="position:Position" xmi:id="152" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="481" startColumn="53" endLine="14" endColumn="57" startOffset="477" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="153" value="1">
              <position xmi:type="position:Position" xmi:id="154" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="484" startColumn="60" endLine="14" endColumn="60" startOffset="484" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="155" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="156" source="File &quot;washing_machine_simple.cif&quot;: " startLine="14" endOffset="484" startColumn="60" endLine="14" endColumn="60" startOffset="484" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="157">
        <position xmi:type="position:Position" xmi:id="158" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="499" startColumn="9" endLine="15" endColumn="12" startOffset="496" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="159">
          <position xmi:type="position:Position" xmi:id="160" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="510" startColumn="14" endLine="15" endColumn="23" startOffset="501" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="161" event="5">
            <position xmi:type="position:Position" xmi:id="162" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="510" startColumn="14" endLine="15" endColumn="23" startOffset="501" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="163">
              <position xmi:type="position:Position" xmi:id="164" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="510" startColumn="14" endLine="15" endColumn="23" startOffset="501" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="165">
          <position xmi:type="position:Position" xmi:id="166" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="522" startColumn="34" endLine="15" endColumn="35" startOffset="521" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="167" variable="17">
            <position xmi:type="position:Position" xmi:id="168" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="519" startColumn="28" endLine="15" endColumn="32" startOffset="515" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="169">
              <position xmi:type="position:Position" xmi:id="170" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="519" startColumn="28" endLine="15" endColumn="32" startOffset="515" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="171" operator="Addition">
            <position xmi:type="position:Position" xmi:id="172" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="530" startColumn="43" endLine="15" endColumn="43" startOffset="530" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="173">
              <position xmi:type="position:Position" xmi:id="174" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="530" startColumn="43" endLine="15" endColumn="43" startOffset="530" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="175" variable="17">
              <position xmi:type="position:Position" xmi:id="176" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="528" startColumn="37" endLine="15" endColumn="41" startOffset="524" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="177">
                <position xmi:type="position:Position" xmi:id="178" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="528" startColumn="37" endLine="15" endColumn="41" startOffset="524" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="179" value="1">
              <position xmi:type="position:Position" xmi:id="180" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="531" startColumn="44" endLine="15" endColumn="44" startOffset="531" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              <type xmi:type="types:IntType" xmi:id="181" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="182" source="File &quot;washing_machine_simple.cif&quot;: " startLine="15" endOffset="531" startColumn="44" endLine="15" endColumn="44" startOffset="531" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="183" target="257">
        <position xmi:type="position:Position" xmi:id="184" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="546" startColumn="9" endLine="16" endColumn="12" startOffset="543" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="185">
          <position xmi:type="position:Position" xmi:id="186" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="555" startColumn="14" endLine="16" endColumn="21" startOffset="548" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="187" event="11">
            <position xmi:type="position:Position" xmi:id="188" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="555" startColumn="14" endLine="16" endColumn="21" startOffset="548" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="189">
              <position xmi:type="position:Position" xmi:id="190" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="555" startColumn="14" endLine="16" endColumn="21" startOffset="548" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="191" operator="Equal">
          <position xmi:type="position:Position" xmi:id="192" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="568" startColumn="34" endLine="16" endColumn="34" startOffset="568" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <type xmi:type="types:BoolType" xmi:id="193">
            <position xmi:type="position:Position" xmi:id="194" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="568" startColumn="34" endLine="16" endColumn="34" startOffset="568" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="195" variable="17">
            <position xmi:type="position:Position" xmi:id="196" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="566" startColumn="28" endLine="16" endColumn="32" startOffset="562" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="197">
              <position xmi:type="position:Position" xmi:id="198" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="566" startColumn="28" endLine="16" endColumn="32" startOffset="562" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="199" value="1">
            <position xmi:type="position:Position" xmi:id="200" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="570" startColumn="36" endLine="16" endColumn="36" startOffset="570" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="201" lower="1" upper="1">
              <position xmi:type="position:Position" xmi:id="202" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="570" startColumn="36" endLine="16" endColumn="36" startOffset="570" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="203">
          <position xmi:type="position:Position" xmi:id="204" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="582" startColumn="47" endLine="16" endColumn="48" startOffset="581" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="205" variable="17">
            <position xmi:type="position:Position" xmi:id="206" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="579" startColumn="41" endLine="16" endColumn="45" startOffset="575" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="207">
              <position xmi:type="position:Position" xmi:id="208" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="579" startColumn="41" endLine="16" endColumn="45" startOffset="575" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="209">
            <position xmi:type="position:Position" xmi:id="210" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="584" startColumn="50" endLine="16" endColumn="50" startOffset="584" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="211" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="212" source="File &quot;washing_machine_simple.cif&quot;: " startLine="16" endOffset="584" startColumn="50" endLine="16" endColumn="50" startOffset="584" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="213" target="247">
        <position xmi:type="position:Position" xmi:id="214" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="613" startColumn="9" endLine="17" endColumn="12" startOffset="610" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="215">
          <position xmi:type="position:Position" xmi:id="216" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="622" startColumn="14" endLine="17" endColumn="21" startOffset="615" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="217" event="9">
            <position xmi:type="position:Position" xmi:id="218" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="622" startColumn="14" endLine="17" endColumn="21" startOffset="615" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="219">
              <position xmi:type="position:Position" xmi:id="220" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="622" startColumn="14" endLine="17" endColumn="21" startOffset="615" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="221" operator="Equal">
          <position xmi:type="position:Position" xmi:id="222" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="636" startColumn="35" endLine="17" endColumn="35" startOffset="636" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <type xmi:type="types:BoolType" xmi:id="223">
            <position xmi:type="position:Position" xmi:id="224" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="636" startColumn="35" endLine="17" endColumn="35" startOffset="636" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="225" variable="17">
            <position xmi:type="position:Position" xmi:id="226" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="634" startColumn="29" endLine="17" endColumn="33" startOffset="630" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="227">
              <position xmi:type="position:Position" xmi:id="228" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="634" startColumn="29" endLine="17" endColumn="33" startOffset="630" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="229" value="2">
            <position xmi:type="position:Position" xmi:id="230" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="638" startColumn="37" endLine="17" endColumn="37" startOffset="638" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="231" lower="2" upper="2">
              <position xmi:type="position:Position" xmi:id="232" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="638" startColumn="37" endLine="17" endColumn="37" startOffset="638" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="233">
          <position xmi:type="position:Position" xmi:id="234" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="650" startColumn="48" endLine="17" endColumn="49" startOffset="649" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="235" variable="17">
            <position xmi:type="position:Position" xmi:id="236" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="647" startColumn="42" endLine="17" endColumn="46" startOffset="643" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="237">
              <position xmi:type="position:Position" xmi:id="238" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="647" startColumn="42" endLine="17" endColumn="46" startOffset="643" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="239">
            <position xmi:type="position:Position" xmi:id="240" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="652" startColumn="51" endLine="17" endColumn="51" startOffset="652" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:IntType" xmi:id="241" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="242" source="File &quot;washing_machine_simple.cif&quot;: " startLine="17" endOffset="652" startColumn="51" endLine="17" endColumn="51" startOffset="652" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="243" value="true">
        <position xmi:type="position:Position" xmi:id="244" source="File &quot;washing_machine_simple.cif&quot;: " startLine="12" endOffset="386" startColumn="9" endLine="12" endColumn="14" startOffset="381" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <type xmi:type="types:BoolType" xmi:id="245">
          <position xmi:type="position:Position" xmi:id="246" source="File &quot;washing_machine_simple.cif&quot;: " startLine="12" endOffset="386" startColumn="9" endLine="12" endColumn="14" startOffset="381" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="247" name="washAt90">
      <position xmi:type="position:Position" xmi:id="248" source="File &quot;washing_machine_simple.cif&quot;: " startLine="19" endOffset="692" startColumn="14" endLine="19" endColumn="21" startOffset="685" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="249" target="27">
        <position xmi:type="position:Position" xmi:id="250" source="File &quot;washing_machine_simple.cif&quot;: " startLine="20" endOffset="707" startColumn="9" endLine="20" endColumn="12" startOffset="704" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="251">
          <position xmi:type="position:Position" xmi:id="252" source="File &quot;washing_machine_simple.cif&quot;: " startLine="20" endOffset="716" startColumn="14" endLine="20" endColumn="21" startOffset="709" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="253" event="13">
            <position xmi:type="position:Position" xmi:id="254" source="File &quot;washing_machine_simple.cif&quot;: " startLine="20" endOffset="716" startColumn="14" endLine="20" endColumn="21" startOffset="709" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="255">
              <position xmi:type="position:Position" xmi:id="256" source="File &quot;washing_machine_simple.cif&quot;: " startLine="20" endOffset="716" startColumn="14" endLine="20" endColumn="21" startOffset="709" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="257" name="washAt40">
      <position xmi:type="position:Position" xmi:id="258" source="File &quot;washing_machine_simple.cif&quot;: " startLine="22" endOffset="753" startColumn="14" endLine="22" endColumn="21" startOffset="746" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="259" target="27">
        <position xmi:type="position:Position" xmi:id="260" source="File &quot;washing_machine_simple.cif&quot;: " startLine="23" endOffset="768" startColumn="9" endLine="23" endColumn="12" startOffset="765" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="261">
          <position xmi:type="position:Position" xmi:id="262" source="File &quot;washing_machine_simple.cif&quot;: " startLine="23" endOffset="777" startColumn="14" endLine="23" endColumn="21" startOffset="770" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="263" event="13">
            <position xmi:type="position:Position" xmi:id="264" source="File &quot;washing_machine_simple.cif&quot;: " startLine="23" endOffset="777" startColumn="14" endLine="23" endColumn="21" startOffset="770" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            <type xmi:type="types:BoolType" xmi:id="265">
              <position xmi:type="position:Position" xmi:id="266" source="File &quot;washing_machine_simple.cif&quot;: " startLine="23" endOffset="777" startColumn="14" endLine="23" endColumn="21" startOffset="770" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\washing_machine\washing_machine_simple.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>


`; 

const eventMap = [
    "washingMachine.closeDoor",
    "washingMachine.insertCoin",
    "washingMachine.openDoor",
    "washingMachine.returnCoin",
    "washingMachine.select40",
    "washingMachine.select90"
  ];