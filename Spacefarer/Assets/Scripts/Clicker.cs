using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Clicker : MonoBehaviour
{

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
            }
        }
    }

    private void PrintName(GameObject clickedObject)
    {
        print(clickedObject.name);
    }
}
