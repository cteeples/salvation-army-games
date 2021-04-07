using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class Clicker : MonoBehaviour
{

    public string LevelElement;
    public Text ScoreText;
    public int Score;

    void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            RaycastHit2D hit = Physics2D.GetRayIntersection(ray);
            if(hit.collider != null)
            {
                Kill_Interface click = hit.collider.GetComponent<Kill_Interface>();
                if(click != null) click.onClickAction();
                Debug.Log("hit collider " + hit.collider.tag);

                if(hit.collider.tag == LevelElement)
                {
                    Score += 200;
                    PlayerPrefs.SetInt("PlayerScore", Score);
                }

                else
                {
                    Score -= 100;
                    PlayerPrefs.SetInt("PlayerScore", Score);
                }

                ScoreText.text = "Score: " + Score.ToString();
            }
        }
    }

    private void PrintName(GameObject clickedObject)
    {
        print(clickedObject.name);
    }
}
